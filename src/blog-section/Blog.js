import './Blog.css';
import blogPicture from './blog-picture.png';

function BlogSection() {
    return (
        <div className="blog-section section">
            <div className="article-header">
                <div className="article-title">
                    <span className="badge">Blog</span>
                    <h2 className="title">How to organize your CSS</h2>
                </div>
                <img className="article-picture" src={blogPicture} alt="laptop on a desk with css code"/>
            </div>
            <div className="article-excerpt">
                <p> In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.</p>
                <p>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
            </div>
            <a className="article-btn" href="dev.to">dev.to</a>
        </div>
    );
}

export default BlogSection;