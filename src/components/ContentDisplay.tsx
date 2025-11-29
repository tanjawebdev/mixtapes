import { useEffect, useState } from 'react';
import { getContentType } from '../types';

interface ContentDisplayProps {
    studentId: string;
    filename: string;
}

/**
 * Displays content based on file type (text, image, or video)
 * Handles smooth transitions and loading states
 */
export function ContentDisplay({ studentId, filename }: ContentDisplayProps) {
    const contentType = getContentType(filename);
    const url = `/students/${studentId}/${filename}`;

    console.log(`[Display] Rendering ${contentType}: ${filename}`);

    switch (contentType) {
        case 'text':
            return <TextContent url={url} filename={filename} />;
        case 'image':
            return <ImageContent url={url} filename={filename} />;
        case 'video':
            return <VideoContent url={url} />;
        default:
            return (
                <div className="content-error">
                    <p>Unsupported content type: {filename}</p>
                </div>
            );
    }
}

/** Text content component */
function TextContent({ url, filename }: { url: string; filename: string }) {
    const [text, setText] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadText() {
            try {
                setLoading(true);
                const response = await fetch(url);
                const content = await response.text();
                setText(content);
            } catch (err) {
                console.error('[Text] Error loading:', err);
                setText('Error loading text content');
            } finally {
                setLoading(false);
            }
        }

        loadText();
    }, [url]);

    if (loading) {
        return <div className="content-loading">Loading text...</div>;
    }

    return (
        <div className="content-text">
            <h2>{filename.replace(/\.(txt|md)$/, '')}</h2>
            <div className="text-content">
                {text.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                ))}
            </div>
        </div>
    );
}

/** Image content component */
function ImageContent({ url, filename }: { url: string; filename: string }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="content-image">
            {!loaded && <div className="content-loading">Loading image...</div>}
            <img
                src={url}
                alt={filename}
                onLoad={() => setLoaded(true)}
                style={{ opacity: loaded ? 1 : 0 }}
            />
        </div>
    );
}

/** Video content component */
function VideoContent({ url }: { url: string }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="content-video">
            {!loaded && <div className="content-loading">Loading video...</div>}
            <video
                src={url}
                controls
                autoPlay
                loop
                muted
                onLoadedData={() => setLoaded(true)}
                style={{ opacity: loaded ? 1 : 0 }}
            >
                Your browser does not support video playback.
            </video>
        </div>
    );
}
