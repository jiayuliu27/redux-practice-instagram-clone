import { connect } from 'react-redux';
// import { displayPost } from '../action/creators';
import SinglePost from '../components/SinglePost';

// const mapStateToProps = (state) => {
// 	console.log(state);
// 	return { post: state.post };
// };

// const mapDispatchToProps = dispatch => ({
// 	displayAPost: (post) => {
// 		dispatch(displayPost(post));
// 	}
// });

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(SinglePost);
export default connect()(SinglePost);