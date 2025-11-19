import React from 'react';
import Giscus from '@giscus/react';

export default function Comments() {
    return (
        <div className="mt-20 pt-12 border-t border-white/10">
            <h2 className="font-heading text-2xl font-bold mb-8">Comments</h2>
            <Giscus
                repo="yourusername/yourrepo"
                repoId="YOUR_REPO_ID"
                category="General"
                categoryId="YOUR_CATEGORY_ID"
                mapping="pathname"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="dark"
                lang="en"
                loading="lazy"
            />
        </div>
    );
}
