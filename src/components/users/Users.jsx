import React from "react";
import styled from "styled-components";
import Avatar from "../../style/components/AvatarStyles";
import { toast } from "react-toastify";
import Table from "../../style/components/TableStyles";
import Front from "../../assets/imgs/front.png";
import Back from "../../assets/imgs/back.png";
import Designer from "../../assets/imgs/designer.png";

const Main = styled.div`
  width: 100%;
  padding: 10px 20px 0px;
`;

const columns = {
  picture: {
    key: "picture",
    label: "Foto",
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
  },
  ocupation: {
    key: "ocupation",
    label: "Cargo",
  },

  joinDate: {
    key: "joinDate",
    label: "Data de admissão",
    align: "center",
  },
  phone: {
    key: "phone",
    label: "Telefone",
    align: "center",
    width: 100,
  },
};

const rowConfig = {
  uniqueKey: "id",
  css: `
    height: 73px;
    &:hover {
      background-color: rgba(216, 216, 216, 0.2)};
    }
  `,
  onClick: (e, item) => {
    toast.success(`Usuário: ${item.name}, Ocupação: ${item.ocupation}`);
    console.log("cliquei na linha:", item);
  },
};

const Users = (users) => {
  return (
    <Main>
      {users && <Table rowConfig={rowConfig} columns={columns} data={users} />}
    </Main>
  );
};

export default Users;
