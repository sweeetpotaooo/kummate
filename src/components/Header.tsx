import { FunctionComponent } from 'react';
import styles from './Header.module.css';
import Notice from '../assets/Notification important.svg';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from "../Redux/store"
import { logOutUser } from "../Redux/user"
import { useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
const Header:FunctionComponent = () => {
	const isLoggedIn = useSelector((state: RootState) =>
    Boolean(state.user.data.token.atk),
  )
  const dispatch: AppDispatch = useDispatch()
  const navigator = useNavigate();
  const userToken = useSelector((state: RootState) => state.user.data.token.atk)

	const handleLogout = async () => {
    try {
      await dispatch(logOutUser({ userToken }))
      navigator("/")
    } catch (error) {
      console.error(error)
    }
  }

	return (
		<Provider store={store}>
		<div className={styles.header}>
		<div className={styles.headerChild}>
			<div className={styles.div}>
				<div className={styles.div1}>
					<div className={styles.div2} onClick={isLoggedIn ? handleLogout : () => navigator('/login')}>
						{isLoggedIn ? '로그아웃' : '로그인'}
					</div>
					{isLoggedIn && <div className={styles.div3}>마이페이지</div>}
					<div className={styles.div4}>룸메이트 구해요</div>
				</div>
			</div>
			<b className={styles.kummate}>KUMMATE</b>
			<img className={styles.noticeIcon} alt="" src={Notice} />
		</div>
	</div>
	</Provider>
);
};

export default Header;