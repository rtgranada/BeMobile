import React from "react";
import styled from "styled-components";
import Avatar from "../../style/components/AvatarStyles";
import Table from "../../style/components/TableStyles";
import Front from "../../assets/imgs/front.png";
import Back from "../../assets/imgs/back.png";
import Designer from "../../assets/imgs/designer.png";
import DirectionIcon from "../../style/components/DirectionIcon";
import DotIcon from "../../style/components/SingleDot";

const Main = styled.div`
  width: 100%;
`;

const columns = {
  picture: {
    key: "picture",
    label: "Foto",
    width: 100,
    alignTh: "center",
    alignTd: "center",
    content: (item) => (
      <Avatar
        name={item.name}
        url={
          item.ocupation !== "Designer"
            ? item.ocupation === "Back-End"
              ? Back
              : Front
            : Designer
        }
        size={42}
      />
    ),
  },
  name: {
    key: "name",
    label: "Nome",
    width: 200,
    alignTh: "left",
    alignTd: "left",
  },
  ocupation: {
    key: "ocupation",
    label: "Cargo",
    alignTh: "start",
    width: 70,
    hideOnTablet: true,
    hideOnPhone: true,
  },

  joinDate: {
    key: "joinDate",
    label: "Data de admissão",
    alignTh: "center",
    alignTd: "center",
    width: 200,
    hideOnTablet: true,
    hideOnPhone: true,
  },
  phone: {
    key: "phone",
    label: "Telefone",
    alignTh: "center",
    alignTd: "center",
    width: 190,
    hideOnTablet: true,
    hideOnPhone: true,
  },
  actions: {
    key: "actions",
    label: { content: <DotIcon /> },
    alignTh: "center",
    alignTd: "center",
    showOnPhone: true,
    showOnTablet: true,
    hideOnDesktop: true,
    styling: { margin: "auto", display: "block", lineHeight: "49px" },
    content: (item, active) => {
      return <DirectionIcon active={active} size={18} />;
    },
  },
};

const rowConfig = {
  uniqueKey: "id",
  css: `
    height: 60px;
    
  `,
};

const Users = (users) => {
  return (
    <Main>
      {users && <Table rowConfig={rowConfig} columns={columns} data={users} />}
    </Main>
  );
};

export default Users;
