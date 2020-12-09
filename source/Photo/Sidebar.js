import React, { Fragment } from "react";

export default props => {
	return (
		<Fragment>
			<div className="collapse navbar-collapse" id="navbarVertical">
				<ul className="navbar-nav mb-md-3">
					<li className="nav-item">
						<a className="nav-link" href="getting-started.html">
							<i className="fe fe-clipboard"></i> Getting started
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="components.html">
							<i className="fe fe-book-open"></i> Components{" "}
							<span className="badge badge-primary ml-auto">23</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="changelog.html">
							<i className="fe fe-git-branch"></i> Changelog
						</a>
					</li>
				</ul>
			</div>
		</Fragment>
	);
};
