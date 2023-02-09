import React from "react";
import { useParams } from "react-router-dom";
import ConfirmAccount from "../compositions/confirm-form/ConfirmAccount";

export default function ConfirmAccountPage() {
  const params = useParams();
  const { id } = params;

  return <ConfirmAccount user_id={id} />;
}
