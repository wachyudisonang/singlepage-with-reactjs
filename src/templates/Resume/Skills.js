import React, { Component } from 'react';

class Entry extends Component {
    constructor(props) {
		super(props);
		this.state = {
			style: {'background': '#313131'}
		};
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    
    handleMouseEnter() {
        this.setState({
            style: {'background': '#11ABB0'}
        });
    }

    handleMouseLeave() {
        this.setState({
            style: {'background': '#313131'}
        });
    }

    render() {
        return (
            <li>
                <span
                    className={`bar-expand percentage${this.props.entry.level}`}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    style={this.state.style} />
                    <em>{this.props.entry.name}</em>
            </li>
        );
    }
}

class Skill extends Component {
    render() {
        const summary = this.props.summary.map(function (point, index) {
            return (
                <p key={index} className='skill-summary'>{point}</p>
            );
        });
        return (
            <div>
                <h3>{this.props.title}</h3>
                {summary}
                <div className='bars'>
                    <ul className='skills'>
                        {this.props.content.map(function (entry, index) {
                            return (
                                <Entry key={index} entry={entry}/>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

class Skills extends Component {
    render() {
        return (
            <section id='skill'>
                <div>
                    <div className='two columns header-col'>
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>
                    <div className='ten columns main-col'>
                        {this.props.content.map(function (skill, index) {
                            return (
                                <Skill
                                    key={index}
                                    title={skill.title}
                                    content={skill.skillDetails}
                                    summary={skill.description}/>
                            );
                        })}
                        {/*
                            <Skill title='Languages' content={this.props.content.languages}/>
                        */}
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;
