import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { screenLargerThan, screenSmallerThan } from "../themes/util";
import { toast } from "react-toastify";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const T = styled.table`
  width: 100%;
  margin-top: 31px;
  border-collapse: collapse;
  border-radius: 4px 4px 0 0;
  overflow: hidden;

  thead {
    background: ${(props) => props.theme.colors.thBg};

    tr {
      background: ${(props) => props.theme.colors.thBg};
    }
  }

  tbody {
    background: ${(props) => props.theme.colors.tBodyBkGr};
    transition: 1s;
  }
`;

const Th = styled.th`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 49px;
  text-align: ${(props) => {
    return props.alignTh ? props.alignTh : "left";
  }};
  color: ${(props) => props.theme.colors.thTxt};
  background: ${(props) => props.theme.colors.thBg};

  ${(props) => props.css && css(...props.css)};
  ${screenSmallerThan.desktop`${(props) => {
    return props.hideOnDesktop && `display: none`;
  }}`}
  ${screenSmallerThan.desktop`${(props) =>
    props.hideOnDesktop && `display: none`}`}
  ${screenSmallerThan.tablet`${(props) =>
    props.hideOnTablet && `display: none`}`}
  ${screenSmallerThan.phone`${(props) => props.hideOnPhone && `display: none`}`}
  ${screenSmallerThan.tablet`${(props) =>
    props.showOnTablet && `display: flex`}`}
  ${screenSmallerThan.phone`${(props) => props.showOnPhone && `display: flex`}`}
  ${screenLargerThan.desktop`${(props) =>
    props.hideOnDesktop && `display: none`}`}
`;

const Td = styled.td`
  text-align: ${(props) => (props.alignTd ? props.alignTd : "left")};
  color: ${(props) => props.theme.colors.text};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  ${(props) => props.css && css(...props.css)};
  ${screenSmallerThan.desktop`${(props) =>
    props.hideOnDesktop && `display: none`}`}
  ${screenSmallerThan.tablet`${(props) =>
    props.hideOnTablet && `display: none`}`}
  ${screenSmallerThan.phone`${(props) => props.hideOnPhone && `display: none`}`}
  ${screenSmallerThan.tablet`${(props) =>
    props.showOnTablet && `display: flex`}`}
  ${screenSmallerThan.phone`${(props) => props.showOnPhone && `display: flex`}`}
  ${screenLargerThan.desktop`${(props) =>
    props.hideOnDesktop && `display: none`}`}
`;

const Tr = styled.tr`
  border-top: 2px solid ${(props) => props.theme.colors.text};
  &:first-child {
    border-top: none;
  }
  ${(props) => props.css && css(...props.css)};
`;

const Others = styled.div`
  color: ${(props) => props.theme.colors.text};
  padding: 0 16px 10px;
  .rowItens {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    h3 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
    }

    span {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      text-align: right;
    }
  }
`;

const UserTableRow = ({ user, props }) => {
  const [expan, setExpan] = useState(null);
  let body = (
    <Tr
      key={user[props?.uniqueKey]}
      css={props?.css}
      onClick={() => {
        return setExpan(!expan);
      }}
    >
      {Object.keys(props?.columns).map((key) => {
        return (
          <Td
            key={key}
            alignTd={`center`}
            alignTh={`center`}
            width={props?.columns[key].width}
            css={props?.columns[key].css}
            hideOnDesktop={props?.columns[key].hideOnDesktop}
            hideOnTablet={props?.columns[key].hideOnTablet}
            hideOnPhone={props?.columns[key].hideOnPhone}
            showOnTablet={props?.columns[key].showOnTablet}
            showOnPhone={props?.columns[key].showOnPhone}
            style={props?.columns[key].styling}
          >
            {props?.columns[key].content
              ? props?.columns[key].content(user, expan)
              : user[key]}
          </Td>
        );
      })}
    </Tr>
  );

  let expansiveTr = (
    <Tr
      className="expandable"
      key={user[props?.uniqueKey]}
      style={{ border: "none" }}
    >
      <td colSpan={5} key={user[props?.uniqueKey]}>
        <Others key={user[props?.uniqueKey]}>
          <div className="rowItens">
            <h3 className="title">Cargo</h3>
            <span>{user.ocupation}</span>
          </div>
          <div className="rowItens">
            <h3 className="title">Data de admissão</h3>
            <span>{user.joinDate}</span>
          </div>
          <div className="rowItens">
            <h3 className="title">Telefone</h3>
            <span>{user.phone}</span>
          </div>
        </Others>
      </td>
    </Tr>
  );

  return (
    user &&
    body && (
      <>
        {body}
        {expan && expansiveTr}
      </>
    )
  );
};

const Table = ({
  columns,
  data = [],
  rowConfig: { uniqueKey = "id", css, onClick } = {},
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 820) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.innerWidth < 820 ? setIsMobile(true) : setIsMobile(false);
    window.addEventListener("resize", handleResize);
  }, []);

  const headerColumns = () =>
    Object.keys(columns).map((key) => (
      <Th
        key={key}
        alignTd={columns[key].alignTd}
        alignTh={isMobile ? `center` : columns[key].alignTh}
        width={columns[key].width}
        css={columns[key].cssHeader}
        hideOnDesktop={columns[key].hideOnDesktop}
        hideOnTablet={columns[key].hideOnTablet}
        hideOnPhone={columns[key].hideOnPhone}
        showOnTablet={columns[key].showOnTablet}
        showOnPhone={columns[key].showOnPhone}
        style={!isMobile ? { inset: "0px" } : columns[key].styling}
      >
        {columns[key].label
          ? columns[key].label?.content
            ? columns[key].label?.content
            : columns[key].label.toUpperCase()
          : ""}
      </Th>
    ));
  const cell = (key, item) => (
    <Td
      key={key}
      alignTd={columns[key].alignTd}
      alignTh={columns[key].alignTh}
      width={columns[key].width}
      css={columns[key].css}
      hideOnDesktop={columns[key].hideOnDesktop}
      hideOnTablet={columns[key].hideOnTablet}
      hideOnPhone={columns[key].hideOnPhone}
      showOnTablet={columns[key].showOnTablet}
      showOnPhone={columns[key].showOnPhone}
    >
      {columns[key].content ? columns[key].content(item) : item[key]}
    </Td>
  );
  const row = (item) => (
    <Tr
      key={item[uniqueKey]}
      css={css}
      onClick={() =>
        toast.success(`Usuário: ${item.name}, Ocupação: ${item.ocupation}`)
      }
    >
      {Object.keys(columns).map((key) => {
        return cell(key, item);
      })}
    </Tr>
  );
  return (
    <Main>
      <T>
        <thead>
          <tr>{headerColumns()}</tr>
        </thead>
        <tbody>
          {data?.users?.map((i, index) => {
            return isMobile ? (
              <UserTableRow
                key={index + 1}
                props={{ css, uniqueKey, columns }}
                index={index + 1}
                user={i}
              />
            ) : (
              row(i)
            );
          })}
        </tbody>
      </T>
    </Main>
  );
};

export default Table;
