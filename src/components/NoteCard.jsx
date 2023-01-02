import React from "react";
import { Link } from "react-router-dom";
import { Card, Stack, Badge } from "react-bootstrap";
import styles from "./NoteList.Module.css";

const NoteCard = ({ id, title, tags }) => {
  return (
    <Card
      as={Link}
      to={`/${id}`}
      className={`h-100 text-reset text-decoration-none ${styles.Card}`}
    >
      <Card.Body>
        <Stack
          gap={2}
          className="justify-content-center align-item-center h-100 "
        >
          <span className="fs-5">{title}</span>
          {tags.length > 0 && (
            <Stack
              gap={1}
              direction="horizontal"
              className="justify-content-center flex-wrap"
            >
              {tags.map((tag) => (
                <Badge className="text-truncate" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default NoteCard;
