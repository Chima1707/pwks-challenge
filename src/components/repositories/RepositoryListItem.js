/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Card, Icon, Avatar } from "antd";
import { Link } from "react-router-dom";

const genRepositoryURL = repository =>
  `/${repository.owner.login}/${repository.name}`;

const StarGazers = ({ count }) => (
  <div className="app-github-stargazers">
    <Icon type="star" theme="filled" />
    <span>{count}</span>
  </div>
);

const Forks = ({ count }) => (
  <div className="app-github-forks">
    <Icon type="fork" />
    <span>{count}</span>
  </div>
);

const RepositoryTitle = ({ repository }) => (
  <>
    <Avatar shape="square" src={repository.owner.avatar_url} />
    <h3 className="app-github-rep-li-name">
      <Link to={genRepositoryURL(repository)}>{repository.name}</Link>
    </h3>
    <StarGazers count={repository.stargazers_count} />
    <Forks count={repository.forks_count} />
  </>
);

const LanguageAttr = ({ language, url }) => (
  <li>
    <dt>Language</dt>
    <dd>
      <a href={url} target="_blank">
        {language}
      </a>
    </dd>
  </li>
);

const GitURLAttr = ({ url }) => (
  <li>
    <dt>Git</dt>
    <dd>
      <a href={url} target="_blank">
        URL
      </a>
    </dd>
  </li>
);

const UpdatedAttr = ({ date }) => (
  <li>
    <dt>Updated on</dt>
    <dd>{date}</dd>
  </li>
);

const DescriptionAttr = ({ description }) => (
  <div className="app-github-rep-li-description">{description}</div>
);

export const RepositoryListItem = ({ repository }) => (
  <Card
    title={<RepositoryTitle {...{ repository }} />}
    className="app-github-list-item app-github-repository-listitem"
  >
    <DescriptionAttr description={repository.description} />
    <ul className="app-github-details-list">
      <LanguageAttr
        language={repository.language}
        url={repository.languages_url}
      />
      <GitURLAttr url={repository.git_url} />
      <UpdatedAttr date={repository.updated_at} />
    </ul>
  </Card>
);
