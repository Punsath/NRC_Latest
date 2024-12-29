import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
export const MainLayout = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
