import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h2 className='text-center mb-5'>Blogs</h2>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            What is Context API?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                        Context is a built-in API introduced in React 16.3. It makes it conceivable to pass information from parent to kids settled where it counts the part tree straightforwardly, rather than going it down through a chain of props. It tends to be utilized to take care of similar issues as Redux does, however it doesn't give a severe method of state control to guarantee an unsurprising way of behaving. Notwithstanding its low-level nature, it very well may be the ideal arrangement now and again.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            what is semantic tag?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                        Semantic is HTML code that utilizes HTML labels to portray the motivation behind page components successfully. Semantic HTML code conveys the importance of its components to the two PCs and people, which helps internet browsers, web search tools, assistive innovations, and human engineers comprehend the parts of a website page.

                        The way to elegantly composed semantic HTML is the utilization of semantic labels. Semantic HTML labels have names that tell the individual or machine perusing the code how precisely they're intended to respond.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Inline block vs Inline block elements
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                        <strong>Block Elements:</strong> The elements that start on another line are known as block elements. A block element takes up the full width of the substance. Not at all like inline, there exists a top and base edge for these components. Block-level components may just show up inside the body tag. Block-level components make a bigger construction than inline elements.
                        <br/>
                        <strong>Inline-Block Elements:</strong>The display value of inline-block works similarly to inline with one exception: the height and width of that element become modifiable.It has no tag examples as it can be applied to any tag using CSS.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;