import React from "react";
import { useParams } from "react-router-dom";
import ServiceList from "./ServiceList";

const ServiceDetail: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { projectId } = useParams<{ projectId: string }>();
  
  // ServiceList handles both listing and detail views based on projectId
  return <ServiceList />;
};

export default React.memo(ServiceDetail);
