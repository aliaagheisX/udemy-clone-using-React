import React from 'react'
import { useContext, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { DetailsContext } from '.';

const VideoDetails = ({ id, description }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls={`description${id}`}
                aria-expanded={open}
            >
                <span className="material-symbols-outlined">
                    {open ? 'expand_less' : 'expand_more'}
                </span>
            </Button>

            <Collapse in={open}>
                <div dangerouslySetInnerHTML={{ __html: description }} id={`description${id}`} />
            </Collapse>
        </>
    )
}

export default function CourseContent() {
    const {
        curriculum_context: {
            data: {
                sections,
                num_of_published_lectures,
                estimated_content_length_text
            }
        }
    } = useContext(DetailsContext)
    const [hours, mins] = estimated_content_length_text.split(':').map((e) => parseInt(e).toLocaleString())

    return (
        <section id='curriculum'>
            <h3>Course content</h3>
            <div>
                <p className='utility-comment'>
                    {sections.length} sections .
                    {num_of_published_lectures} lectures.
                    {hours}hr {mins}m total length
                </p>
                <button>Expand All Sections</button>
            </div>

            <Accordion alwaysOpen>
                {
                    sections.map(({ content_length_text, index, items, lecture_count, title },) => (
                        <Accordion.Item eventKey={index} key={index}>
                            <Accordion.Header>{title}, {lecture_count} , {content_length_text}</Accordion.Header>

                            {
                                items.map(({ icon_class, title, preview_url, id, description, content_summary, can_be_previewed }) => (
                                    <Accordion.Body key={id}>
                                        <span className="material-symbols-outlined">
                                            {icon_class === "udi udi-play-circle" ? 'play_circle' : 'note'}
                                        </span>
                                        <a href={preview_url}>{title}</a>
                                        {description !== "" && <VideoDetails id={id} description={description} />}

                                        {can_be_previewed && <a href={preview_url}>Preview</a>}
                                        <span>{content_summary}</span>
                                    </Accordion.Body>


                                ))
                            }


                        </Accordion.Item>
                    ))
                }
            </Accordion>
        </section>
    )
}
