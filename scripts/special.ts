import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!); 
// @ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imageSrc: "/es.svg",
      },
      {
        id: 2,
        title: "Japanese",
        imageSrc: "/jp.svg",
      },
      {
        id: 3,
        title: "French",
        imageSrc: "/fr.svg",
      },
      {
        id: 4,
        title: "Italian",
        imageSrc: "/it.svg",
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1, // Spanish
        title: "Unit 1",
        description: "Learn the basics of Spanish",
        order: 1,
      },
      {
        id: 2,
        courseId: 1, // Spanish
        title: "Unit 2",
        description: "Learn the intermediate concepts of Spanish",
        order: 2,
      },
      {
        id: 3,
        courseId: 2, // Japanese
        title: "Unit 1",
        description: "Learn the basics of Japanese",
        order: 1,
      },
      {
        id: 4,
        courseId: 2, // Japanese
        title: "Unit 2",
        description: "Learn the intermediate concepts of Japanese",
        order: 2,
      },
      {
        id: 5,
        courseId: 3, // French
        title: "Unit 1",
        description: "Learn the basics of French",
        order: 1,
      },
      {
        id: 6,
        courseId: 3, // French
        title: "Unit 2",
        description: "Learn the intermediate concepts of French",
        order: 2,
      },
      {
        id: 7,
        courseId: 4, // Italian
        title: "Unit 1",
        description: "Learn the basics of Italian",
        order: 1,
      },
      {
        id: 8,
        courseId: 4, // Italian
        title: "Unit 1",
        description: "Learn the intermediate concepts of Italian",
        order: 2,
      },
    ]);

    await db.insert(schema.lessons).values([
      //spanish
      {id: 1,unitId: 1,order: 1,title: "Nouns",},
      {id: 2,unitId: 1,order: 2,title: "Verbs",},
      {id: 3,unitId: 1,order: 3,title: "Verbs",},
      {id: 4,unitId: 1,order: 4,title: "Verbs",},
      {id: 5,unitId: 1,order: 5,title: "Verbs",},
      {id: 6,unitId: 2,order: 1,title: "Nouns",},
      {id: 7,unitId: 2,order: 2,title: "Verbs",},
      {id: 8,unitId: 2,order: 3,title: "Verbs",},
      {id: 9,unitId: 2,order: 4,title: "Verbs",},
      {id: 10,unitId: 2,order: 5,title: "Verbs",},

      //japanese
      {id: 11,unitId: 3,order: 1,title: "Nouns",},
      {id: 12,unitId: 3,order: 2,title: "Verbs",},
      {id: 13,unitId: 3,order: 3,title: "Verbs",},
      {id: 14,unitId: 3,order: 4,title: "Verbs",},
      {id: 15,unitId: 3,order: 5,title: "Verbs",},
      {id: 16,unitId: 4,order: 1,title: "Nouns",},
      {id: 17,unitId: 4,order: 2,title: "Verbs",},
      {id: 18,unitId: 4,order: 3,title: "Verbs",},
      {id: 19,unitId: 4,order: 4,title: "Verbs",},
      {id: 20,unitId: 4,order: 5,title: "Verbs",},

      //french
      {id: 21,unitId: 5,order: 1,title: "Nouns",},
      {id: 22,unitId: 5,order: 2,title: "Verbs",},
      {id: 23,unitId: 5,order: 3,title: "Verbs",},
      {id: 24,unitId: 5,order: 4,title: "Verbs",},
      {id: 25,unitId: 5,order: 5,title: "Verbs",},
      {id: 26,unitId: 6,order: 1,title: "Nouns",},
      {id: 27,unitId: 6,order: 2,title: "Verbs",},
      {id: 28,unitId: 6,order: 3,title: "Verbs",},
      {id: 29,unitId: 6,order: 4,title: "Verbs",},
      {id: 30,unitId: 6,order: 5,title: "Verbs",},

      //italian
      {id: 31,unitId: 7,order: 1,title: "Nouns",},
      {id: 32,unitId: 7,order: 2,title: "Verbs",},
      {id: 33,unitId: 7,order: 3,title: "Verbs",},
      {id: 34,unitId: 7,order: 4,title: "Verbs",},
      {id: 35,unitId: 7,order: 5,title: "Verbs",},
      {id: 36,unitId: 8,order: 1,title: "Nouns",},
      {id: 37,unitId: 8,order: 2,title: "Verbs",},
      {id: 38,unitId: 8,order: 3,title: "Verbs",},
      {id: 39,unitId: 8,order: 4,title: "Verbs",},
      {id: 40,unitId: 8,order: 5,title: "Verbs",},

    
    ]);

    await db.insert(schema.challenges).values([
      //Spanish unit 1
      {id: 1,lessonId: 1,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 2,lessonId: 1,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 3,lessonId: 1,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 4,lessonId: 1,type: "SELECT",order: 1,question: 'Which one of these is the "the woman"?',},
      {id: 5,lessonId: 1,type: "ASSIST",order: 2,question: '"the woman"',},

      {id: 6,lessonId: 2,type: "SELECT",order: 1,question: 'Which one of these is the "the boy"?',},
      {id: 7,lessonId: 2,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 8,lessonId: 2,type: "SELECT",order: 3,question: 'Which one of these is the "the zombie"?',},
      {id: 9,lessonId: 2,type: "SELECT",order: 1,question: 'Which one of these is the "the girl"?',},
      {id: 10,lessonId: 2,type: "ASSIST",order: 2,question: '"the boy"',},

      {id: 11,lessonId: 3,type: "SELECT",order: 1,question: 'Which one of these is the "the woman"?',},
      {id: 12,lessonId: 3,type: "ASSIST",order: 2,question: '"the robot"',},
      {id: 13,lessonId: 3,type: "SELECT",order: 3,question: 'Which one of these is the "the man"?',},
      {id: 14,lessonId: 3,type: "SELECT",order: 1,question: 'Which one of these is the "the boy"?',},
      {id: 15,lessonId: 3,type: "ASSIST",order: 2,question: '"the woman"',},

      {id: 16,lessonId: 4,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 17,lessonId: 4,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 18,lessonId: 4,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 19,lessonId: 4,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 20,lessonId: 4,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 21,lessonId: 5,type: "SELECT",order: 1,question: 'Which one of these is the "the robot"?',},
      {id: 22,lessonId: 5,type: "ASSIST",order: 2,question: '"the zombie"',},
      {id: 23,lessonId: 5,type: "SELECT",order: 3,question: 'Which one of these is the "the girl"?',},
      {id: 24,lessonId: 5,type: "SELECT",order: 1,question: 'Which one of these is the "the boy"?',},
      {id: 25,lessonId: 5,type: "ASSIST",order: 2,question: '"the woman"',},

      //spanish unit 2
      {id: 26,lessonId: 6,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 27,lessonId: 6,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 28,lessonId: 6,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 29,lessonId: 6,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 30,lessonId: 6,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 31,lessonId: 7,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 32,lessonId: 7,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 33,lessonId: 7,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 34,lessonId: 7,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 35,lessonId: 7,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 36,lessonId: 8,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 37,lessonId: 8,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 38,lessonId: 8,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 39,lessonId: 8,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 40,lessonId: 8,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 41,lessonId: 9,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 42,lessonId: 9,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 43,lessonId: 9,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 44,lessonId: 9,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 45,lessonId: 9,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 46,lessonId: 10,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 47,lessonId: 10,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 48,lessonId: 10,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 49,lessonId: 10,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 50,lessonId: 10,type: "ASSIST",order: 2,question: '"the man"',},

      //japanese unit 1
      {id: 51,lessonId: 11,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 52,lessonId: 11,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 53,lessonId: 11,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 54,lessonId: 11,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 55,lessonId: 11,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 56,lessonId: 12,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 57,lessonId: 12,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 58,lessonId: 12,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 59,lessonId: 12,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 60,lessonId: 12,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 61,lessonId: 13,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 62,lessonId: 13,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 63,lessonId: 13,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 64,lessonId: 13,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 65,lessonId: 13,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 66,lessonId: 14,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 67,lessonId: 14,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 68,lessonId: 14,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 69,lessonId: 14,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 70,lessonId: 14,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 71,lessonId: 15,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 72,lessonId: 15,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 73,lessonId: 15,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 74,lessonId: 15,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 75,lessonId: 15,type: "ASSIST",order: 2,question: '"the man"',},

      //japanese unit 2

      {id: 76,lessonId: 16,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 77,lessonId: 16,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 78,lessonId: 16,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 79,lessonId: 16,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 80,lessonId: 16,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 81,lessonId: 17,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 82,lessonId: 17,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 83,lessonId: 17,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 84,lessonId: 17,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 85,lessonId: 17,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 86,lessonId: 18,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 87,lessonId: 18,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 88,lessonId: 18,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 89,lessonId: 18,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 90,lessonId: 18,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 91,lessonId: 19,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 92,lessonId: 19,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 93,lessonId: 19,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 94,lessonId: 19,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 95,lessonId: 19,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 96,lessonId: 20,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 97,lessonId: 20,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 98,lessonId: 20,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 99,lessonId: 20,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 100,lessonId: 20,type: "ASSIST",order: 2,question: '"the man"',},

      //french unit 1

      {id: 101,lessonId: 21,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 102,lessonId: 21,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 103,lessonId: 21,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 104,lessonId: 21,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 105,lessonId: 21,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 106,lessonId: 22,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 107,lessonId: 22,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 108,lessonId: 22,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 109,lessonId: 22,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 110,lessonId: 22,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 111,lessonId: 23,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 112,lessonId: 23,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 113,lessonId: 23,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 114,lessonId: 23,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 115,lessonId: 23,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 116,lessonId: 24,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 116,lessonId: 24,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 118,lessonId: 24,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 119,lessonId: 24,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 120,lessonId: 24,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 121,lessonId: 25,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 122,lessonId: 25,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 123,lessonId: 25,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 124,lessonId: 25,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 125,lessonId: 25,type: "ASSIST",order: 2,question: '"the man"',},

      //french unit 2

      {id: 126,lessonId: 26,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 127,lessonId: 26,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 128,lessonId: 26,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 129,lessonId: 26,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 130,lessonId: 26,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 131,lessonId: 27,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 132,lessonId: 27,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 133,lessonId: 27,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 134,lessonId: 27,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 135,lessonId: 27,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 136,lessonId: 28,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 137,lessonId: 28,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 138,lessonId: 28,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 139,lessonId: 28,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 140,lessonId: 28,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 141,lessonId: 29,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 142,lessonId: 29,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 143,lessonId: 29,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 144,lessonId: 29,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 145,lessonId: 29,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 146,lessonId: 30,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 147,lessonId: 30,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 148,lessonId: 30,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 149,lessonId: 30,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 150,lessonId: 30,type: "ASSIST",order: 2,question: '"the man"',},

      //italian unit 1

      {id: 151,lessonId: 31,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 152,lessonId: 31,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 153,lessonId: 31,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 154,lessonId: 31,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 155,lessonId: 31,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 156,lessonId: 32,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 157,lessonId: 32,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 158,lessonId: 32,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 159,lessonId: 32,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 160,lessonId: 32,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 161,lessonId: 33,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 162,lessonId: 33,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 163,lessonId: 33,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 164,lessonId: 33,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 165,lessonId: 33,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 166,lessonId: 34,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 167,lessonId: 34,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 168,lessonId: 34,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 169,lessonId: 34,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 170,lessonId: 34,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 171,lessonId: 34,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 172,lessonId: 34,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 173,lessonId: 34,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 174,lessonId: 34,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 175,lessonId: 34,type: "ASSIST",order: 2,question: '"the man"',},

      //italian unit 2

      {id: 176,lessonId: 35,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 177,lessonId: 35,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 178,lessonId: 35,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 179,lessonId: 35,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 180,lessonId: 35,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 181,lessonId: 36,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 182,lessonId: 36,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 183,lessonId: 36,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 184,lessonId: 36,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 185,lessonId: 36,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 186,lessonId: 37,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 187,lessonId: 37,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 188,lessonId: 37,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 189,lessonId: 37,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 190,lessonId: 37,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 191,lessonId: 38,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 192,lessonId: 38,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 193,lessonId: 38,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 194,lessonId: 38,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 195,lessonId: 38,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 196,lessonId: 39,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 197,lessonId: 39,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 198,lessonId: 39,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 199,lessonId: 39,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 200,lessonId: 39,type: "ASSIST",order: 2,question: '"the man"',},

      {id: 201,lessonId: 40,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 202,lessonId: 40,type: "ASSIST",order: 2,question: '"the man"',},
      {id: 203,lessonId: 40,type: "SELECT",order: 3,question: 'Which one of these is the "the robot"?',},
      {id: 204,lessonId: 40,type: "SELECT",order: 1,question: 'Which one of these is the "the man"?',},
      {id: 205,lessonId: 40,type: "ASSIST",order: 2,question: '"the man"',},

    ]);

    await db.insert(schema.challengeOptions).values([
      //Which one of these is "the man" ?
      {challengeId: 1, imageSrc: "/man.svg", correct: true, text: "el hombre", audioSrc: "/es_man.mp3",},
      {challengeId: 1,imageSrc: "/woman.svg",correct: false,text: "la mujer",audioSrc: "/es_woman.mp3",},
      {challengeId: 1,imageSrc: "/robot.svg",correct: false,text: "el robot",audioSrc: "/es_robot.mp3",},

    ]);

    await db.insert(schema.challengeOptions).values([
      // "the man"?
      {challengeId: 2,correct: true,text: "el hombre",audioSrc: "/es_man.mp3",},
      {challengeId: 2,correct: false,text: "la mujer",audioSrc: "/es_woman.mp3",},
      {challengeId: 2,correct: false,text: "el robot",audioSrc: "/es_robot.mp3",},

    ]);

    await db.insert(schema.challengeOptions).values([
      // Which one of these is the "the robot"?
      {challengeId: 3,imageSrc: "/man.svg",correct: false,text: "el hombre",audioSrc: "/es_man.mp3",},
      {challengeId: 3,imageSrc: "/woman.svg",correct: false,text: "la mujer",audioSrc: "/es_woman.mp3",},
      {challengeId: 3,imageSrc: "/robot.svg",correct: true,text: "el robot",audioSrc: "/es_robot.mp3",},
    ]);

   




    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();

