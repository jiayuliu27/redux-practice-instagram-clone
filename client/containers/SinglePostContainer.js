import { connect } from 'react-redux';
import { incrementLike } from '../action/creators';
import SinglePost from '../components/SinglePost';

// const mapStateToProps = (state) => {
// 	console.log(state);
// 	return { post: state.post };
// };

const mapDispatchToProps = dispatch => ({
	likePost: (post) => {
		dispatch(incrementLike(post));
	}
});

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(SinglePost);
export default connect()(SinglePost);