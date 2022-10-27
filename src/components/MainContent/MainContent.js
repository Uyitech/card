import React from "react"

function MainContent() {
    return (
        <div className="container">
            <img src="https://images.unsplash.com/photo-1613151096599-b234757eb4d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJveSUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="img-fluid business-img" />
            <main className="main">
                <h3 className="Name">Evans Ewansiha</h3>
                <p className="Stack">Frontend Developer</p>
                <a className="website" href="https://uyi.julitech.net/">My Portfolio</a>
                <a href="mailto:ewansihaevans@gmail.com" className="btn btn-primary">
                    <i className='bx bxs-envelope'></i>Email
                </a>
            </main>
        </div>
    )
}

export default MainContent;