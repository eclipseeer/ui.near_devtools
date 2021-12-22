import logo from '../../images/near_devtools_logo.svg';
import { cls } from './Sidebar.css';

export const Sidebar = () => (
  <div css={cls.container}>
    <img css={cls.logo} src={logo} alt="Near Devtools logo" />
  </div>
);
