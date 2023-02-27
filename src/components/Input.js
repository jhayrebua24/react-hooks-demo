import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";

function Input({ value, name, onChange, disabled, ...props }) {
  useEffect(() => {
    // component did mount
    console.log("rendering input");
    // component did unmount
    return () => {
      console.log(" unmounting input");
    };
  }, []);

  return (
    <div>
      <input
        type="text"
        {...props}
        value={value}
        name={name}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}

Input.defaultProps = {
  disabled: true,
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.instanceOf(Function).isRequired,
  disabled: PropTypes.bool,
};
export default memo(Input);
