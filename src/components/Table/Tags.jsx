import PropTypes from 'prop-types';
import React from 'react';

const Tags = ({ tags }) => {
    const colors = ['#FF5733A1', '#3498DBA1', '#9B59B6A1', '#F39C12A1', '#2ECC71A1'];

    return (
        <li>
            {tags.map((tag, index) => (
                <React.Fragment key={index}>
                    <span
                        style={{
                            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                        }}
                        className={`inline-block h-5 whitespace-nowrap rounded-[45px] mx-[3px] px-2.5 text-sm capitalize text-[#F4F5F6]`}>
                        {tag}
                    </span>
                </React.Fragment>
            ))}
        </li>
    );
};

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
