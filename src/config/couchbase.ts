import couchbase from "couchbase";

const cluster = new couchbase.Cluster("couchbase://localhost", {
  username: "Administrator",
  password: "password",
});

const bucket = cluster.bucket("default");
const collection = bucket.defaultCollection();

export { cluster, bucket, collection };
