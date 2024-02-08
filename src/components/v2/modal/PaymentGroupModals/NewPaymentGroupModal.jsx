import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import IconButton from "../../buttons/IconButton";

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

export default function NewPaymentGroupModal({
  handleSave,
  handleAbort,
  handleClose,
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const nameInputRef = useRef(null);
  const nameLabelRef = useRef(null);
  const valueInputRef = useRef(null);
  const valueLabelRef = useRef(null);

  function clearFields() {
    nameInputRef.current.value = "";
    valueInputRef.current.value = "";

    nameInputRef.current.classList.value = "";
    nameLabelRef.current.classList.value = "";
    valueInputRef.current.classList.value = "";
    valueLabelRef.current.classList.value = "";
  }

  const saveGroupCallback = useCallback(async () => {
    const name = nameInputRef?.current?.value;
    const value = valueInputRef?.current?.value;

    const nameRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\-'\s]+$/g;

    if (name.length < 2 || !nameRegex.test(name)) {
      nameInputRef.current.classList.value = "invalid";
      nameLabelRef.current.classList.value = "invalid";
      return;
    }
    nameInputRef.current.classList.value = "valid";
    nameLabelRef.current.classList.value = "valid";

    if (value.length === 0 || isNaN(Number(value)) || Number(value) < 0) {
      valueInputRef.current.classList.value = "invalid";
      valueLabelRef.current.classList.value = "invalid";
      return;
    }
    valueInputRef.current.classList.value = "valid";
    valueLabelRef.current.classList.value = "valid";

    setLoading(true);
    const response = await handleSave({ name, value: Number(value) });
    setLoading(false);
    if (response.error) {
      setError(response.errorMessage);
    }
    if (response.success) {
      setSuccess(response.successMessage);
      clearFields();
    }
  }, [nameInputRef, nameLabelRef, valueInputRef, valueLabelRef]);

  return (
    <ModalContainer>
      <StyledModal>
        <div className="modal-header">
          <h2>Adicionar novo grupo</h2>
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
            <label htmlFor="group-name" ref={nameLabelRef}>
              Nome
            </label>
            <input
              ref={nameInputRef}
              type="text"
              id="group-name"
              name="group-name"
            />
          </div>
          <div className="form-row">
            <label htmlFor="group-value" ref={valueLabelRef}>
              Valor R$
            </label>
            <input
              ref={valueInputRef}
              type="number"
              id="group-value"
              name="group-value"
              min="0.00"
              step="0.01"
            />
          </div>
        </div>
        <div className="modal-footer">
          <IconButton
            id="save-new-user"
            layout="icon-only"
            btn_variant="accept"
            padding="medium"
            btnProps={{ disabled: loading }}
            handler={saveGroupCallback}
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
