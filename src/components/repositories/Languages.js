import React, { Component } from "react";
import { connect } from "react-redux";
import { setRepositoriesLanguage } from "./../../redux/modules/repositories";
import { getRepositoryLanguagesSelector } from "./../../redux/modules/selectors";
import { Dropdown, Menu } from "antd";

export class Languages extends Component {
  handleMenuClick = e => this.props.setRepositoriesLanguage(e.key);
  renderMenu = () => (
    <Menu onClick={this.handleMenuClick}>
      <Menu.Item key="all">All Languages</Menu.Item>
      {this.props.languages.map(language => (
        <Menu.Item key={language}> {language} </Menu.Item>
      ))}
    </Menu>
  );
  render = () => {
    return (
      <Dropdown.Button overlay={this.renderMenu}>
        {this.props.language === "all"
          ? "All Languages"
          : `Language: ${this.props.language}`}
      </Dropdown.Button>
    );
  };
}

const mapStateToProps = state => ({
  languages: getRepositoryLanguagesSelector(state),
  language: state.repositories.language
});

const mapDispatchToProps = { setRepositoriesLanguage };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Languages);
