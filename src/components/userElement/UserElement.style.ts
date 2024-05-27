import styled from "styled-components";
import { flexWrapper, font } from "../styles/common.ts";
import { theme } from "../styles/Theme.ts";

const UserBlock = styled.div`
    ${flexWrapper({align: 'center', justify: 'start', gap: '12px'})};
`;

const Avatar = styled.img `
    width: 54px;
    height: 54px;
    object-fit: cover;
    border-radius: 4px;
`;

const TextInfo = styled.p `
   ${flexWrapper({direction: 'column', align: 'start', gap: '4px'})};
`;

const Name = styled.span `
    ${font({Fmin: theme.fontSize.main, Fmax: theme.fontSize.main, weight: 600})}
`;

const Small = styled.span `
    ${font({Fmin: theme.fontSize.small, Fmax: theme.fontSize.small, weight: 200})}
`;

export const style = {
    UserBlock,
    Avatar,
    TextInfo,
    Name,
    Small,
};

