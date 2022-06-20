// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as NavLinks from "../data/NavLinks.bs.js";
import Link from "next/link";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Router from "next/router";

function Nav$Links(Props) {
  var handleDropMenuOpen = Props.handleDropMenuOpen;
  var router = Router.useRouter();
  return React.createElement(React.Fragment, undefined, Belt_Array.map(NavLinks.data, (function (link) {
                    return React.createElement(Link, {
                                children: React.createElement("a", {
                                      className: (
                                        router.pathname.includes(link.path) ? "text-sky-500" : "text-slate-900 dark:text-slate-300"
                                      ) + " no-underline pr-5 hover:var(--tx-accent) text-lg",
                                      onClick: (function (param) {
                                          return Curry._1(handleDropMenuOpen, false);
                                        })
                                    }, link.title),
                                href: link.link,
                                passHref: true,
                                key: link.title
                              });
                  })));
}

var Links = {
  make: Nav$Links
};

function Nav$default(Props) {
  var match = React.useState(function () {
        return false;
      });
  var setIsDropMenuOpen = match[1];
  return React.createElement(React.Fragment, undefined, React.createElement("div", {
                  className: "flex flex-nowrap items-center"
                }, React.createElement("div", {
                      className: "hidden md:flex flex-nowrap items-center"
                    }, React.createElement(Nav$Links, {
                          handleDropMenuOpen: (function (value) {
                              return Curry._1(setIsDropMenuOpen, (function (param) {
                                            return value;
                                          }));
                            })
                        })), React.createElement("svg", {
                      className: "fill-[var(--tx-sub)] cursor-pointer md:hidden",
                      height: "38px",
                      width: "38px",
                      onClick: (function (param) {
                          return Curry._1(setIsDropMenuOpen, (function (prev) {
                                        return !prev;
                                      }));
                        }),
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, React.createElement("path", {
                          d: "M0 0h24v24H0V0z",
                          fill: "none"
                        }), React.createElement("path", {
                          d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                        }))), React.createElement("div", {
                  className: "w-full h-screen absolute top-20 left-0 bg-[var(--bg-main)] flex-col flex-nowrap " + (
                    match[0] ? "flex" : "hidden"
                  )
                }, React.createElement(Nav$Links, {
                      handleDropMenuOpen: (function (value) {
                          return Curry._1(setIsDropMenuOpen, (function (param) {
                                        return value;
                                      }));
                        })
                    })));
}

var $$default = Nav$default;

export {
  Links ,
  $$default ,
  $$default as default,
  
}
/* react Not a pure module */
