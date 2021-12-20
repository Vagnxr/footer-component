import React from "react";
import { Container, Box, Strong, Line, Body } from "./styles";
import { IFooter } from "./interfaces";

export const Footer: React.FC<IFooter> = ({ data }) => {
  return (
    <Container>
      <Body>
        {data.data.map((link) => (
          <div>
            <Strong>{link.title}</Strong>
            {link.links.map((item) => (
              <a href={item.url}>{item.description}</a>
            ))}
          </div>
        ))}

        {data.socialNetwork &&
          data.socialNetwork.map((item) => (
            <Box>
              <Strong>{item.title}</Strong>
              <div>
                {item.links.map((link) => (
                  <a href={link.url}>
                    <img src={link.src} alt={link.description} />
                  </a>
                ))}
              </div>
            </Box>
          ))}
      </Body>

      <hr />

      <Line>
        {data.others?.map((item) =>
          item.links.map((link, index) => (
            <li>
              <a href={link.url}>{link.description}</a>
            </li>
          ))
        )}
      </Line>
    </Container>
  );
};
