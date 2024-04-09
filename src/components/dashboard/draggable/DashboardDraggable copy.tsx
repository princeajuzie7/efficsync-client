"use client";
import React, { useState, useEffect, useRef } from "react";
// import Muuri from "muuri";
import { Welcome, WhatsOnYourMind } from "@/components/dashboard";
import {
  Engagement,
  Getstarted,
  Message,
  MyActiveTask,
  Recent,
  Teamspace,
} from "@/widget/Dashboard";

export function DashboardDraggable() {
  const [grid, setGrid] = useState<any>();
  const gridRef = useRef<any>(null);

  useEffect(() => {
    const initializeMuuri = async () => {
      if (typeof window !== "undefined") {
        const Muuri = (await import("muuri")).default;
        if (!gridRef.current) {
          const newMonrri = new Muuri(".dashboards-grid", {
            dragEnabled: true,
            layoutDuration: 400,
            layoutEasing: "ease",
            // fillGaps: true,
            dragStartPredicate: (item, e) => {
              // Disable default drag start predicate
              return e.target.classList.contains("dragging");
            },
            // horizontal: true,
            sortData: {
              id: function (item, element) {
                return element.children[0].id;
              },
            },

            dragPlaceholder: {
              enabled: true,
              createElement: (item: any): HTMLElement => {
                if (typeof window !== "undefined" && window.document) {
                  const placeholder = document.createElement("div");
                  placeholder.style.width = `${
                    item.getElement().clientWidth
                  }px`;
                  placeholder.style.height = `${
                    item.getElement().clientHeight
                  }px`;
                  placeholder.style.backgroundColor = "#f8f7fdec";
                  placeholder.style.border = "1.5px dashed #E7E9F2";
                  placeholder.style.borderRadius = `20px`;
                  return placeholder;
                }
                throw new Error("Window object not available."); // Throw error if window is not defined
              },
            },
          });

          setGrid(newMonrri);
          gridRef.current = newMonrri;
        }
      }
    };

    if (typeof window !== "undefined" && window.document) {
      initializeMuuri();
    }

    return () => {
      if (gridRef.current) {
        gridRef.current?.destroy();
      }
    };
  }, []);

  const [Timer, setTimer] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setTimer(false);
    }, 2000);
  }, []);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     if (grid) {
  //       const layoutData = window.localStorage.getItem("layout");
  //       if (layoutData) {
  //         loadLayout(grid, layoutData);
  //       }

  //       grid.on("move", () => {
  //         saveLayout();
  //       });
  //     }
  //   }
  // }, [grid]);

  function serializeLayout(grid: any) {
    return JSON.stringify(
      grid
        .getItems()
        .map((item: any) => item.getElement().getAttribute("data-id"))
    );
  }

  function saveLayout() {
    const layout = serializeLayout(grid);
    typeof window !== "undefined" &&
      window.localStorage.setItem("layout", layout);
  }

  function loadLayout(grid: any, serializedLayout: string) {
    const layout = JSON.parse(serializedLayout);
    const currentItems = grid.getItems();
    const newItems = layout
      .map((itemId: any) =>
        currentItems.find(
          (item: any) => item.getElement().getAttribute("data-id") === itemId
        )
      )
      .filter(Boolean);
    grid.sort(newItems, { layout: "instant" });
  }

  return (
    <div>
      {Timer && (
        // welcome page for grettings
        <Welcome />
      )}
      <div className="dashboards-grid relative  lg:z-10 z-0 mx-auto  xl:w-[990px]  w-auto  max-w-full  muuri-active muuri  ">
        <MyActiveTask />
        {/* my Active task widget  */}
        <Recent />
        {/* my Rwecent  widget  */}
        <Getstarted />
        {/* Get started  widget  */}

        <Engagement />
        {/* my  Engagement  widget  */}

        <Teamspace />
        {/* my Team space  widget  */}
        <Message />
        {/* my messages widget  */}
      </div>
    </div>
  );
}

export default DashboardDraggable;
