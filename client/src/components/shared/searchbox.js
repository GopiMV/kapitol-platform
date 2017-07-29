import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SearchBox extends Component{
    render(){
        return(
            <div id="search-box">
                <ul id='search-options' className="no-padding no-margin text-left list-no-styles">
                    {this.props.searchType === 'members' ? this.props.searchResults.filter(word => {
                        if(word.firstName.indexOf(this.props.value) > -1 || word.lastName.indexOf(this.props.value) > -1 ){
                            return word;
                        }else{
                            return ''
                        }
                    }).map(word =>{
                        return (
                            <Link key={word.memberId} to={`/${this.props.searchType}/${word.firstName} ${word.lastName}`}>
                                <li>
                                    <img className='memberPhoto' src={'https://theunitedstates.io/images/congress/225x275/' + word.memberId + '.jpg'}  alt=""/>
                                    <span>{word.firstName}</span>
                                    <span>{word.lastName} </span>
                                </li>
                            </Link>)
                    }) : this.props.searchResults.filter(word => {
                            if(word.keyword.includes(this.props.value)){
                                return word;
                            }else{
                                return '';
                            }
                    }).map(word => {
                        return(
                            <Link key={word.keyword} to={`/${this.props.searchType}/${word}`}>
                                <li>
                                    <span className="keyword-icon">
                                        <img src={require('../../images/' + word.icon)} alt="keyword-icon"/>
                                    </span>
                                    <span className="keyword">{word.keyword}</span>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default SearchBox;
