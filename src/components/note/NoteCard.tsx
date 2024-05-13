import React from "react";
import { Tag } from "../../routes/AppRouter";
import { Badge, Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export type SimnplifiedNote = {
  tags: Tag[];
  title: string;
  id: string;
};

const NoteCard = ({ tags, title, id }: SimnplifiedNote) => {
  return (
    <Card
      as={Link}
      to={`/${id}`}
      className="h-100 text-reset text-decoration-none card"
    >
      <Card.Body>
        <Stack
          gap={2}
          className="align-items-center justify-content-center h-100"
        >
          <span className="fs-5">{title}</span>
          {tags.length > 0 && (
            <Stack
              gap={1}
              className="justify-content-center flex-wrap"
              direction="horizontal"
            >
              {tags.map((tag) => (
                <Badge key={tag.id} className="text-truncate">
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
