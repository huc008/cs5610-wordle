import './App.css';
import Settings from '../data/Settings.svg'
import Rules from '../data/question.svg'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-nav">
                {/* TODO: set it to homepage */}
                    <a href="#" className="nav-item nav-link">Setting</a> 
                </div>
                <button className="setting-button">
                    <img src={Settings}/>
                </button>
                <h3 className="navbar-title">Wordle</h3>
                {/* TODO: delete the "rule" & "setting" when button's onclick function works */}
                <div className="navbar-nav ms-auto">
                    <a href="/rule" className="nav-item nav-link">Rule</a>
                </div>
                <button className="setting-button">
                    <img src={Rules}/>
                </button>
            </nav>
        </div>
    )
}
