import React, { Component } from "react";
import { connect } from "react-redux";
import { setRepositoriesRanking } from "./../../redux/modules/repositories";
import { Dropdown, Menu, Icon } from "antd";

export class RankBy extends Component {
  handleMenuClick = e => this.props.setRepositoriesRanking(e.key);
  renderMenu = () => (
    <Menu onClick={this.handleMenuClick}>
      <Menu.Item key="stargazers_count">
        <Icon type="star" theme="filled" />
        Rank by star
      </Menu.Item>
      <Menu.Item key="forks_count">
        <Icon type="fork" />
        Rank by forks
      </Menu.Item>
    </Menu>
  );
  render = () => {
    return (
      <Dropdown.Button
        overlay={this.renderMenu}
        icon={
          <Icon
            theme={this.props.rankBy === "forks_count" ? null : "filled"}
            type={this.props.rankBy === "forks_count" ? "fork" : "star"}
          />
        }
      >
        Ranked by {this.props.rankBy === "forks_count" ? "Forks" : "Stars"}
      </Dropdown.Button>
    );
  };
}

const mapStateToProps = ({ repositories: { rankBy } }) => ({ rankBy });

const mapDispatchToProps = { setRepositoriesRanking };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RankBy);
