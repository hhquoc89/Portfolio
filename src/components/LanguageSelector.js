import React from "react";
import { useTranslation } from "react-i18next";
import Dropdown from 'react-bootstrap/Dropdown';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Dropdown >
      <Dropdown.Toggle variant="second" id="dropdown-basic">
        Ngôn ngữ
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => changeLanguage('en')}>English</Dropdown.Item>
        <Dropdown.Item onClick={() => changeLanguage('vi')}>Tiếng Việt</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
