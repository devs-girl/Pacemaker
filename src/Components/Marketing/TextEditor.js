import React, { useState } from 'react';
import RichTextEditor from 'react-rte';

const TextEditor = () => {
    const [value, setValue] = useState(RichTextEditor.createEmptyValue())
    const onChange = (value) => {
        console.log("v==>", value);
        // setValue(value);
        // setMarkdown(value.toString("markdown"));
    };
    const toolbarConfig = {
        // Optionally specify the groups to display (displayed in the order listed).
        display: ['INLINE_STYLE_BUTTONS', 'BLOCK_ALIGNMENT_BUTTONS'],
        INLINE_STYLE_BUTTONS: [
            { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
            { label: 'Italic', style: 'ITALIC' },
            { label: 'Underline', style: 'UNDERLINE' }
        ],
        BLOCK_ALIGNMENT_BUTTONS: [
            { label: "Align Left", style: "ALIGN_LEFT" },
            { label: "Align Center", style: "ALIGN_CENTER" },
            { label: "Align Right", style: "ALIGN_RIGHT" },
            { label: "Align Justify", style: "ALIGN_JUSTIFY" },
        ],
    };

    return (
        <div className='w-[90%] md:w-[430px]'>
            <RichTextEditor value={value} toolbarConfig={toolbarConfig} onChange={(e) => onChange(e)} />
        </div>
    );
};

export default TextEditor;