export { default as HeaderOnly } from './HeaderOnly';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="cotainer">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
