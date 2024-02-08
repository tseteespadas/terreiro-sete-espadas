import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const StyledIconButton = styled.button`
  display: flex;
  cursor: pointer;
  border: 0;
  outline: 0;
  border-radius: 12px;
  padding: ${({ custom_padding }) => {
    if (!["small", "medium", "large"].includes(custom_padding)) {
      return custom_padding;
    }
    if (custom_padding === "small") {
      return "0.25rem 0.5rem";
    }
    if (custom_padding === "medium") {
      return "0.5rem 1rem";
    }
    if (custom_padding === "large") {
      return "1rem 2rem";
    }
  }};

  &[data-btn_variant="transparent"] {
    background-color: transparent;
    &:hover {
      background-color: transparent;
    }
  }

  &[data-btn_variant="accept"] {
    background-color: ${(props) => props.theme.colors.green};
    &.bordered {
      border: 1px solid ${(props) => props.theme.colors.green};
    }
    &:hover {
      background-color: ${(props) => props.theme.colors.darkgreen};
      &.bordered {
        border: 1px solid ${(props) => props.theme.colors.darkgreen};
      }
    }
  }

  &[data-btn_variant="danger"] {
    background-color: ${(props) => props.theme.colors.red};
    &.bordered {
      border: 1px solid ${(props) => props.theme.colors.red};
    }
    &:hover {
      background-color: ${(props) => props.theme.colors.darkred};
      &.bordered {
        border: 1px solid ${(props) => props.theme.colors.darkred};
      }
    }
  }

  &[data-btn_variant="normal"] {
    background-color: ${(props) => props.theme.colors.blue};
    &.bordered {
      border: 1px solid ${(props) => props.theme.colors.blue};
    }
    &:hover {
      background-color: ${(props) => props.theme.colors.green};
      &.bordered {
        border: 1px solid ${(props) => props.theme.colors.green};
      }
    }
  }

  .icon-only {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  span {
    font-size: 1rem;
    display: grid;
    place-content: center;
    &.size-sm {
      font-size: 1rem;
    }
    &.size-md {
      font-size: 2rem;
    }
    &.size-lg {
      font-size: 3rem;
    }

    &[data-icon_variant="normal"] {
      color: ${(props) => props.theme.colors.blue};
    }

    &[data-icon_variant="accept"] {
      color: ${(props) => props.theme.colors.green};
    }

    &[data-icon_variant="danger"] {
      color: ${(props) => props.theme.colors.red};
    }

    &[data-icon_variant="neutral_light"] {
      color: ${(props) => props.theme.colors.white};
    }

    &[data-icon_variant="neutral_dark"] {
      color: ${(props) => props.theme.colors.black};
    }
  }

  &:disabled,
  &:disabled:hover {
    background-color: ${(props) => props.theme.colors.gray2};

    span {
      color: white;
    }
  }
`;

/**
 *
 * @param {{
 *  id: string,
 *  text?: string,
 *  btn_variant?: "normal" | "accept" | "danger" | "transparent",
 *  layout: "icon-only" | "icon-text" | "text-icon",
 *  bordered: boolean,
 *  padding: "small" | "medium" | "large" | string,
 *  btnProps?: React.ButtonHTMLAttributes
 *  icon: Array<string>,
 *  icon_size: "sm" | "md" | "lg",
 *  icon_variant?: "normal" | "accept" | "danger" | "neutral_dark" | "neutral_light"
 *  iconProps?: FontAwesomeIconProps
 * }} props
 */
export default function FormIconButton({
  icon,
  text,
  id,
  layout,
  btn_variant,
  icon_variant,
  bordered,
  padding,
  icon_size,
  btnProps,
  iconProps,
}) {
  const _btn_variant = btn_variant || "normal";
  const _icon_variant = icon_variant || "normal";

  return (
    <StyledIconButton
      {...btnProps}
      data-btn_variant={_btn_variant}
      id={id}
      className={layout + (bordered ? " bordered" : "")}
      custom_padding={padding}
    >
      {layout === "icon-only" && (
        <span className={`size-${icon_size}`} data-icon_variant={_icon_variant}>
          <FontAwesomeIcon {...iconProps} icon={icon} />
        </span>
      )}
      {layout === "icon-text" && (
        <>
          <span
            className={`size-${icon_size}`}
            data-icon_variant={_icon_variant}
          >
            <FontAwesomeIcon {...iconProps} icon={icon} />
          </span>
          {text}
        </>
      )}
      {layout === "text-icon" && (
        <>
          {text}
          <span
            className={`size-${icon_size}`}
            data-icon_variant={_icon_variant}
          >
            <FontAwesomeIcon {...iconProps} icon={icon} />
          </span>
        </>
      )}
    </StyledIconButton>
  );
}
