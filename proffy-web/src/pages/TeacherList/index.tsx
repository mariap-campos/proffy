import React from 'react';
import './styles.css'
import PageHeader from '../../components/PageHeader';

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
        <PageHeader title="These are all the available proffys.">
            <form id="search-teachers">
                <div className="input-block">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject"/>
                </div>
                <div className="input-block">
                    <label htmlFor="week-day">Week Day</label>
                    <input type="text" id="subject"/>
                </div>
                <div className="input-block">
                    <label htmlFor="time">Hour</label>
                    <input type="text" id="subject"/>
                </div>
            </form>
            </PageHeader>
        </div>
    )
}

export default TeacherList;