import React from "react";
import styled, { css } from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const T = styled.table`
  width: 80%;
  border-collapse: collapse;
  color: #686f7a;

  tbody:before {
    content: "-";
    display: block;
    line-height: 0.6em;
    color: transparent;
  }
`;

const Th = styled.th`
  text-align: ${(props) => (props.align ? props.align : "left")};
  font-size: 18px;
  color: ${(props) => props.theme.colors.text};
  font-weight: 700;
  opacity: 0.65;
  background: ${(props) => props.theme.colors.thBg};

  ${(props) => props.css && css(...props.css)};
`;

const Td = styled.td`
  text-align: ${(props) => (props.align ? props.align : "left")};
  color: ${(props) => props.theme.colors.text};
  ${(props) => props.css && css(...props.css)};
`;

const Tr = styled.tr`
  border-bottom: 2px solid ${(props) => props.theme.colors.text};
  ${(props) => props.css && css(...props.css)};
`;

const Table = ({
  columns,
  data = [],
  rowConfig: { uniqueKey = "id", css, onClick } = {},
}) => {
  const headerColumns = () =>
    Object.keys(columns).map((key) => (
      <Th
        key={key}
        align={columns[key].align}
        width={columns[key].width}
        css={columns[key].cssHeader}
      >
        {columns[key].label ? columns[key].label.toUpperCase() : ""}
      </Th>
    ));
  const cell = (key, item) => (
    <Td
      key={key}
      align={columns[key].align}
      width={columns[key].width}
      css={columns[key].css}
    >
      {columns[key].content ? columns[key].content(item) : item[key]}
    </Td>
  );
  const row = (item) => (
    <Tr
      key={item[uniqueKey]}
      css={css}
      onClick={onClick ? (e) => onClick(e, item) : null}
    >
      {Object.keys(columns).map((key) => cell(key, item))}
    </Tr>
  );
  return (
    <Main>
      <T>
        <thead>
          <tr>{headerColumns()}</tr>
        </thead>
        <tbody>{data?.users?.map((i) => row(i))}</tbody>
      </T>
    </Main>
  );
};

export default Table;
