import { ColumnController } from "./controller/ColumnController";
import { CardController } from "./controller/CardController";

export const Routes = [
    // cards
    {
        method: "get",
        route: "/cards",
        controller: CardController,
        action: "all"
    }, {
        method: "get",
        route: "/cards/:key",
        controller: CardController,
        action: "one"
    }, {
        method: "post",
        route: "/cards",
        controller: CardController,
        action: "save"
    }, {
        method: "delete",
        route: "/cards/:key",
        controller: CardController,
        action: "remove"
    },
    // columns
    {
        method: "get",
        route: "/columns",
        controller: ColumnController,
        action: "all"
    }, {
        method: "get",
        route: "/columns/:key",
        controller: ColumnController,
        action: "one"
    }, {
        method: "post",
        route: "/columns",
        controller: ColumnController,
        action: "save"
    }, {
        method: "delete",
        route: "/columns/:key",
        controller: ColumnController,
        action: "remove"
    }];