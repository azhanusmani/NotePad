import { useRef, useState } from "react";
import { Form, Stack, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import CreatableReactSelect from "react-select/creatable";
import { v4 as uuidV4 } from "uuid";

const NoteForm = ({
  onSubmit,
  onAddTag,
  availableTags,
  title = "",
  markdown = "",
  tags = [],
}) => {
  const titleRef = useRef(null);
  const markDownRef = useRef(null);

  const [selectedTags, setSelectedTags] = useState(tags);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({
      title: titleRef.current.value,
      markdown: markDownRef.current.value,
      tags: selectedTags,
    });
    navigate("..");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control ref={titleRef} required defaultValue={title} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect
                onCreateOption={(label) => {
                  const newTag = { id: uuidV4(), label };
                  onAddTag(newTag);
                  setSelectedTags((prev) => [...prev, newTag]);
                }}
                value={selectedTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                options={availableTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                onChange={(tags) => {
                  setSelectedTags(
                    tags.map((tag) => {
                      return { label: tag.label, id: tag.value };
                    })
                  );
                }}
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control
            required
            as="textarea"
            ref={markDownRef}
            rows={15}
            defaultValue={markdown}
          />
        </Form.Group>
        <Stack direction="horizontal" gap={3} className="justify-content-end ">
          <button type="submit" className="btn btn-primary">
            Save
          </button>

          <Link to="..">
            <button type="button" className="btn btn-light">
              Cancel
            </button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
};

export default NoteForm;
