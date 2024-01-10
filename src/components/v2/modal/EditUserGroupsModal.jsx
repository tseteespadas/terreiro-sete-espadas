import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import IconButton from "../buttons/IconButton";

const ModalContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  inset: 0;
  display: grid;
  place-content: center;
  z-index: 1000;
`;

const StyledModal = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer";
  grid-template-columns: repeat(3, minmax(10rem, 1fr));
  grid-template-rows: minmax(2rem, 5vh) auto minmax(2rem, 5vh);
  border-radius: 12px;
  background-color: #f2f4f5;
  padding: 1rem;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.4);

  .modal-header {
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    h2 {
      font-size: 1.5rem;
      color: ${(props) => props.theme.colors.darkgreen};
      margin-bottom: 0;
    }

    .modal-control {
      position: absolute;
      background-color: #f2f4f5;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      right: -2rem;
      top: -2rem;
    }
  }

  .modal-content {
    grid-area: content;
    margin-bottom: 1rem;

    .modal-alert-container {
      display: grid;
      grid-template-columns: 3rem auto;
      gap: 1rem;
      padding: 1rem;
      border-radius: 12px;

      &.error {
        background-color: ${(props) => props.theme.colors.red};
      }

      &.success {
        background-color: ${(props) => props.theme.colors.green};
      }

      .aside {
        display: flex;
        justify-content: center;
        align-items: center;

        .aside-icon {
          color: white;
          font-size: 3rem;
        }
      }

      .modal-alert-content {
        display: grid;
        grid-template-rows: auto auto;
      }

      .modal-alert-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        h3 {
          font-size: 1.25rem;
          color: white;
          margin: 0;
          line-height: 1;
        }

        span {
          position: absolute;
          right: 0;
          top: 5px;
          font-size: 0.75rem;
          cursor: pointer;
          text-decoration: underline;
        }
        margin-bottom: 0.75rem;
      }

      .modal-alert-message {
        p {
          font-size: 1rem;
          color: white;
          margin: 0;
          line-height: 1;
        }
      }
    }

    .form-row {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;

      label {
        font-size: 0.85rem;
        font-weight: 500;
      }

      label.valid {
        color: ${(props) => props.theme.colors.green};
      }

      label.invalid {
        color: ${(props) => props.theme.colors.red};
      }

      input[type="text"] {
        border-bottom: 1px solid ${(props) => props.theme.colors.blue};
      }

      input[type="text"].valid {
        border-bottom: 1px solid ${(props) => props.theme.colors.green};
      }

      input[type="text"].invalid {
        border-bottom: 1px solid ${(props) => props.theme.colors.red};
      }
    }

    option:checked {
      background-color: ${(props) => props.theme.colors.blue};
      color: #fff;
    }

    option {
      padding: 0.35em 1em;
      border-bottom: 1px solid #bababa;
    }
  }

  .modal-footer {
    grid-area: footer;
    display: flex;
    gap: 0.25rem;
    & > * {
      place-self: end;
    }
  }
`;

export default function EditUserGroupsModal({
  user_id,
  name,
  allGroups,
  userGroups,
  handleSave,
  handleAbort,
  handleClose,
}) {
  const [selectedGroups, setSelectedGroups] = useState(userGroups);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const groupsLabelRef = useRef(null);

  const handleGroupsChange = useCallback((e) => {
    const options = e.target.options;
    const value = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setSelectedGroups(value);
  }, []);

  const saveUserCallback = useCallback(async () => {
    if (selectedGroups.length === 0) {
      groupsLabelRef.current.classList.value = "invalid";
      return;
    }
    groupsLabelRef.current.classList.value = "valid";

    setLoading(true);
    const response = await handleSave({
      user_id,
      groups: selectedGroups,
    });
    setLoading(false);
    if (response.error) {
      setError(response.errorMessage);
    }
    if (response.success) {
      setSuccess(response.successMessage);
    }
  }, [user_id, selectedGroups, groupsLabelRef]);

  return (
    <ModalContainer>
      <StyledModal>
        <div className="modal-header">
          <h2>Alterar grupos de {name.split(" ")[0]}</h2>
          <div className="modal-control">
            <IconButton
              handler={handleClose}
              icon={["fas", "times"]}
              id="close-modal"
              layout="icon-only"
              btn_variant="transparent"
              icon_variant="neutral_dark"
              padding="small"
              icon_size="md"
            />
          </div>
        </div>
        <div className="modal-content">
          {error && (
            <div className="modal-alert-container error">
              <div className="aside">
                <FontAwesomeIcon
                  icon={["fas", "exclamation-triangle"]}
                  className="aside-icon"
                />
              </div>
              <div className="modal-alert-content">
                <div className="modal-alert-header">
                  <h3>
                    Um erro ocorreu :({" "}
                    <span
                      onClick={() => {
                        setError(null);
                      }}
                    >
                      [dispensar]
                    </span>
                  </h3>
                </div>
                <div className="modal-alert-message">
                  <p>{error}</p>
                </div>
              </div>
            </div>
          )}
          {success && (
            <div className="modal-alert-container success">
              <div className="aside">
                <FontAwesomeIcon
                  icon={["fas", "check-circle"]}
                  className="aside-icon"
                />
              </div>
              <div className="modal-alert-content">
                <div className="modal-alert-header">
                  <h3>
                    Oba! Deu tudo certo!{" "}
                    <span
                      onClick={() => {
                        setSuccess(null);
                      }}
                    >
                      [dispensar]
                    </span>
                  </h3>
                </div>
                <div className="modal-alert-message">
                  <p>{success}</p>
                </div>
              </div>
            </div>
          )}
          <div className="form-row">
            <label htmlFor="user-groups" ref={groupsLabelRef}>
              Grupos de Usuário
            </label>
            <select
              name="user-groups"
              id="user-groups"
              multiple
              value={selectedGroups}
              onChange={handleGroupsChange}
            >
              {allGroups.map((group) => {
                return (
                  <option
                    id={group.group_id}
                    key={group.group_id}
                    value={group.group_id}
                  >
                    {group.group_name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="modal-footer">
          <IconButton
            id="save-new-user"
            layout="icon-only"
            btn_variant="accept"
            padding="medium"
            btnProps={{ disabled: loading }}
            handler={saveUserCallback}
            icon={["fas", loading ? "spinner" : "save"]}
            icon_variant="neutral_light"
            iconProps={{ spin: loading }}
          />
          <IconButton
            id="discard-new-user"
            layout="icon-only"
            btn_variant="danger"
            padding="medium"
            btnProps={{ disabled: loading }}
            handler={handleAbort}
            icon={["fas", "redo"]}
            icon_variant="neutral_light"
          />
        </div>
      </StyledModal>
    </ModalContainer>
  );
}
