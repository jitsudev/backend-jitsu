import { UTApi } from "uploadthing/server";

let utapi: UTApi;

if (process.env.NODE_ENV === "production") {
	utapi = new UTApi();
} else {
	if (!global.utapi) {
		global.utapi = new UTApi();
	}

	utapi = global.utapi;
}

export default utapi;
