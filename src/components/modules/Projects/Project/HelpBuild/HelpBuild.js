import React, { forwardRef } from "react";
import { withTheme } from "styled-components";
import Section from "../Section";
import { Wrapper, ButtonsContainer, Button } from "./StyledHelpBuild";

const HelpBuild = ({ Color }, ref) => (
  <Section
    bgColor="#494949"
    contentStyle={{ paddingBottom: 0 }}
    Title=""
    ref={ref}
    Content={
      <Wrapper>
        <h3>Help build this project!</h3>
        <p>
          We need your financial support, technical experience, and input into
          the types of skills you want to see in the next generation of
          developers and your future employees!
        </p>

        <ButtonsContainer>
          <Button
            bgColor="#4A9D48"
            href="https://devlaunchers.com/c/sponsorship/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-coins"></i> Become a sponsor
          </Button>
        </ButtonsContainer>
      </Wrapper>
    }
  />
);

export default withTheme(forwardRef(HelpBuild));
