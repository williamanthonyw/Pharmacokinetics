import React from 'react'
import DOMPurify from 'dompurify';
const HtmlRender = ({html}) => {
    const sanitizedHTML = DOMPurify.sanitize(html);

    return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
}

export default HtmlRender