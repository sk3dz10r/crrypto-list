import styled from "styled-components";

export const TextLabelSmallDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.7em;
`;

export const LabelDiv = styled.div`
  font-weight: bold;
  width: 24px;
  color: white;
  padding-left: 5px;
  justify-content: flex-end;
  text-align: right;
`;

export const ValueDiv = styled.div`
  width: 45px;
  font-weight: bold;
  background-color: #444545;
  padding-left: 2px;
  padding-right: 2px;
  ${props => (props.sign ? "color: lime" : "color: red;")}
`;
