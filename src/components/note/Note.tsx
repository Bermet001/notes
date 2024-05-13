import React from "react";
import useNote from "./useNote";
import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Note = () => {
  const note = useNote();
  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>{note.title}</h1>

          {note.tags.length > 0 && (
            <Stack
              gap={1}
              direction="horizontal"
              className="justify-content-center flex-wrap"
            >
              {note.tags.map((tag) => (
                <Badge className="text-truncate" key={tag.id}></Badge>
              ))}
            </Stack>
          )}
        </Col>

        <Col>
          <Stack>
            <Link to={`/${note.id}/edit`}>
              <Button variant="primary">Edit</Button>
            </Link>

            <Button variant="outline-secondary">Delete</Button>

            <Link to="..">
              <Button variant="outline-secondary">Back</Button>
            </Link>
          </Stack>
        </Col>
      </Row>

      <ReactMarkdown>{note.markdown}</ReactMarkdown>
    </>
  );
};

export default Note;
