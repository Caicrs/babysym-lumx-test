// src/models/ipfsModel.ts
import * as AWS from "aws-sdk";
import { S3 } from "aws-sdk";
import axios from "axios";

const s3 = new AWS.S3({
  apiVersion: "2023-03-01",
  accessKeyId: process.env.FILEBASE_ACCESS_KEY,
  secretAccessKey: process.env.FILEBASE_SECRET_KEY,
  endpoint: "https://s3.filebase.com",
  region: "us-east-1",
  s3ForcePathStyle: true,
});

export async function getDataFromCID(cid: string): Promise<any> {
  try {
    const response = await axios.get("https://ipfs.filebase.io/ipfs/" + cid);
    return response.data;
  } catch (error) {
    console.error("Error when making GET request", error);
    throw error;
  }
}

export function getIPFSData(): Promise<any> {
  return new Promise((resolve, reject) => {
    s3.listBuckets((err, data) => {
      if (err) {
        console.error("Error when listing buckets", err);
        reject(err);
      } else {
        console.log(data.Buckets);
        resolve(data);
      }
    });
  });
}

export function getObjectByKey(
  params: S3.Types.GetObjectRequest
): Promise<any> {
  return new Promise((resolve, reject) => {
    s3.getObject(params, (err, data) => {
      if (err) {
        console.error("Error when getting object", err);
        resolve(err);
      } else {
        if (data?.Metadata?.cid) {
          // Call the function to get the data from the IPFS URL
          getDataFromCID(data?.Metadata?.cid)
            .then((data) => {
              console.log(data);
              resolve(data);
            })
            .catch((error) => {
              resolve(error);
            });
        }
      }
    });
  });
}

export function createData(params: S3.Types.PutObjectRequest): Promise<any> {
  return new Promise((resolve, reject) => {
    // Call the putObject function
    s3.putObject(params, (err, data) => {
      if (err) {
        console.error("Error when putting object", err);
        reject(err);
      } else {
        console.log("Object put successfully", data);
        resolve(data);
      }
    });
  });
}

export function createBucket(bucketName: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const params: S3.Types.CreateBucketRequest = {
      Bucket: bucketName,
    };
    s3.createBucket(params, (err, data) => {
      if (err) {
        console.error("Error when creating bucket", err);
        reject(err);
      } else {
        console.log("Bucket created successfully", data);
        resolve(data);
      }
    });
  });
}
