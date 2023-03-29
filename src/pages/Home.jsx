import React, { useEffect, useState } from "react";
import { Container, SearchBox } from "../style/components/HomeStyles";
import { BsSearch } from "react-icons/bs";
import api from "../services/api";
import Users from "../components/users/Users";

const Home = () => {
  const [users, setUsers] = useState();
  const [filteredUsers, setFilteredUsers] = useState();

  useEffect(() => {
    api
      .get("/users")
      .then((response) => setUsers(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  useEffect(() => {
    users && setFilteredUsers(users);
  }, [users]);

  const keys = ["name", "ocupation", "phone"];

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searcheredUser = users.filter((item) =>
      keys.some((key) =>
        item[key].toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    setFilteredUsers(searcheredUser);
  };
  return (
    <>
      <Container>
        <nav>
          <h3>Funcionários</h3>

          <SearchBox>
            <input
              className="search__input"
              type="text"
              placeholder="Pesquisar"
              onChange={handleSearch}
            />
            <span>
              <BsSearch />
            </span>
          </SearchBox>
        </nav>
      </Container>
      <Container>{filteredUsers && <Users users={filteredUsers} />}</Container>
    </>
  );
};

export default Home;
