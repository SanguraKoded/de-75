window.CURRICULUM = {
 "days": [
  {
   "n": 1,
   "m": 1,
   "topic": "Python Basics – Setup & Syntax",
   "video": "freeCodeCamp – Learn Python Full Course (4.5 hrs)",
   "url": "https://www.youtube.com/watch?v=rfscVS0vtbw",
   "steps": [
    {
     "t": "Install Python 3.11 from python.org + VS Code + Git",
     "sub": []
    },
    {
     "t": "Watch: video sections 0:00–1:30 (variables, data types, strings, numbers)",
     "sub": []
    },
    {
     "t": "Practice: write a script that asks your name and prints 'Hello, [name]! You are a future Data Engineer!'",
     "sub": []
    },
    {
     "t": "Practice: build a simple tip calculator (input bill amount, tip %, print total)",
     "sub": []
    },
    {
     "t": "Practice: FizzBuzz — print 1-100, replace multiples of 3 with 'Fizz', 5 with 'Buzz'",
     "sub": []
    },
    {
     "t": "Deliverable: save scripts in /day01/ folder and push to GitHub",
     "sub": []
    }
   ]
  },
  {
   "n": 2,
   "m": 1,
   "topic": "Python Data Structures",
   "video": "freeCodeCamp – Python Full Course (continue: 1:30–2:45)",
   "url": "https://www.youtube.com/watch?v=rfscVS0vtbw",
   "steps": [
    {
     "t": "Watch: lists, tuples, sets, dictionaries sections of the course",
     "sub": []
    },
    {
     "t": "Practice: create a list of 10 countries, sort it, slice first 5, reverse it",
     "sub": []
    },
    {
     "t": "Practice: build a word-frequency counter using a dict (count how many times each word appears in a paragraph)",
     "sub": []
    },
    {
     "t": "Practice: use a set to find unique values from a list with duplicates",
     "sub": []
    },
    {
     "t": "Practice: create a dict of 5 data engineering tools with a short description for each",
     "sub": []
    },
    {
     "t": "Deliverable: push all scripts to GitHub day02/ folder",
     "sub": []
    }
   ]
  },
  {
   "n": 3,
   "m": 1,
   "topic": "OOP – Classes & Methods",
   "video": "freeCodeCamp – Python OOP Full Course (2 hrs)",
   "url": "https://www.youtube.com/watch?v=ZDa-Z5JzLYM",
   "steps": [
    {
     "t": "Watch the first 60 minutes: classes, __init__, methods, self",
     "sub": []
    },
    {
     "t": "Practice: create a Person class with name, age attributes and a greet() method",
     "sub": []
    },
    {
     "t": "Practice: create a DataPipeline class with attributes: source, destination, status",
     "sub": []
    },
    {
     "t": "Add methods: run(), stop(), get_status() to DataPipeline",
     "sub": []
    },
    {
     "t": "Create 3 pipeline instances and call methods on each",
     "sub": []
    },
    {
     "t": "Deliverable: push to GitHub day03/",
     "sub": []
    }
   ]
  },
  {
   "n": 4,
   "m": 1,
   "topic": "File Handling – CSV & JSON",
   "video": "Corey Schafer – Reading & Writing Files in Python",
   "url": "https://www.youtube.com/watch?v=Uh2ebFW8OYM",
   "steps": [
    {
     "t": "Watch the full video (~25 min)",
     "sub": []
    },
    {
     "t": "Also watch: https://www.youtube.com/watch?v=9N6a-VLBa2I (CSV files in Python)",
     "sub": []
    },
    {
     "t": "Practice: create a CSV file with 10 rows of fake employee data (id, name, salary, dept)",
     "sub": []
    },
    {
     "t": "Practice: read the CSV back, filter rows where salary > 50000, print results",
     "sub": []
    },
    {
     "t": "Practice: convert the filtered data to a JSON file",
     "sub": []
    },
    {
     "t": "Practice: read the JSON back and pretty-print it",
     "sub": []
    },
    {
     "t": "Deliverable: push csv_to_json.py + data files to GitHub day04/",
     "sub": []
    }
   ]
  },
  {
   "n": 5,
   "m": 1,
   "topic": "APIs – Requests Library",
   "video": "Tech With Tim – Python Requests Tutorial (30 min)",
   "url": "https://www.youtube.com/watch?v=tb8gHvYlCFs",
   "steps": [
    {
     "t": "Watch full video",
     "sub": []
    },
    {
     "t": "Sign up for free API key at openweathermap.org",
     "sub": []
    },
    {
     "t": "Practice: fetch current weather for Arusha using the API",
     "sub": []
    },
    {
     "t": "Practice: save raw JSON response to a file weather_raw.json",
     "sub": []
    },
    {
     "t": "Practice: parse the JSON — extract city, temperature, humidity, description",
     "sub": []
    },
    {
     "t": "Practice: loop through 5 cities, fetch weather for each, save all to one JSON file",
     "sub": []
    },
    {
     "t": "Deliverable: push to GitHub day05/ with your API key in a .env file (never commit keys!)",
     "sub": []
    }
   ]
  },
  {
   "n": 6,
   "m": 1,
   "topic": "Pandas Basics",
   "video": "Keith Galli – Pandas Tutorial Full (1 hr)",
   "url": "https://www.youtube.com/watch?v=vmEHCJofslg",
   "steps": [
    {
     "t": "Watch first 35 minutes (loading, head, info, describe, dtypes)",
     "sub": []
    },
    {
     "t": "Load your weather JSON from Day 5 into a Pandas DataFrame",
     "sub": []
    },
    {
     "t": "Practice: df.head(), df.tail(), df.info(), df.describe()",
     "sub": []
    },
    {
     "t": "Practice: rename columns to snake_case",
     "sub": []
    },
    {
     "t": "Practice: drop rows with null values, check with df.isnull().sum()",
     "sub": []
    },
    {
     "t": "Practice: select specific columns, filter rows where temperature > 25",
     "sub": []
    },
    {
     "t": "Deliverable: push analysis notebook or script to GitHub day06/",
     "sub": []
    }
   ]
  },
  {
   "n": 7,
   "m": 1,
   "topic": "Pandas Transformations",
   "video": "Keith Galli – Pandas Tutorial (continue: 35 min–end)",
   "url": "https://www.youtube.com/watch?v=vmEHCJofslg",
   "steps": [
    {
     "t": "Watch remaining 25 minutes (groupby, merge, apply)",
     "sub": []
    },
    {
     "t": "Practice: groupby city → calculate mean temperature and humidity",
     "sub": []
    },
    {
     "t": "Practice: add a new column 'temp_category' (Hot/Warm/Cool) using np.where or apply()",
     "sub": []
    },
    {
     "t": "Practice: sort by temperature descending, reset index",
     "sub": []
    },
    {
     "t": "Practice: write 5 analytical questions about your data and answer each with Pandas code",
     "sub": []
    },
    {
     "t": "Practice: export cleaned DataFrame to CSV and JSON",
     "sub": []
    },
    {
     "t": "Deliverable: push to GitHub day07/",
     "sub": []
    }
   ]
  },
  {
   "n": 8,
   "m": 1,
   "topic": "Logging & Error Handling",
   "video": "Corey Schafer – Python Logging Tutorial (17 min)",
   "url": "https://www.youtube.com/watch?v=-ARI4Cz-awo",
   "steps": [
    {
     "t": "Watch full video",
     "sub": []
    },
    {
     "t": "Also watch: https://www.youtube.com/watch?v=NIWwJbo-9_8 (Python Exceptions)",
     "sub": []
    },
    {
     "t": "Add Python logging to your Day 5 ETL script (INFO for each step, ERROR on failures)",
     "sub": []
    },
    {
     "t": "Configure logging to write to both console and a logs/etl.log file",
     "sub": []
    },
    {
     "t": "Wrap API call in try/except — handle ConnectionError, JSONDecodeError, KeyError",
     "sub": []
    },
    {
     "t": "Test: disconnect internet and run script — confirm error is caught and logged",
     "sub": []
    },
    {
     "t": "Deliverable: push updated ETL script with logging to GitHub day08/",
     "sub": []
    }
   ]
  },
  {
   "n": 9,
   "m": 1,
   "topic": "Unit Testing with pytest",
   "video": "ArjanCodes – Python Testing with pytest (1 hr)",
   "url": "https://www.youtube.com/watch?v=cHYq1MRoyI0",
   "steps": [
    {
     "t": "Watch first 40 minutes",
     "sub": []
    },
    {
     "t": "Install pytest: pip install pytest",
     "sub": []
    },
    {
     "t": "Write test_transform.py — test your data cleaning function with at least 3 test cases",
     "sub": []
    },
    {
     "t": "Test case 1: normal input → expected output",
     "sub": []
    },
    {
     "t": "Test case 2: empty input → should raise ValueError",
     "sub": []
    },
    {
     "t": "Test case 3: input with nulls → nulls removed correctly",
     "sub": []
    },
    {
     "t": "Run: pytest -v and fix until all tests pass ✅",
     "sub": []
    },
    {
     "t": "Deliverable: push tests/ folder to GitHub day09/",
     "sub": []
    }
   ]
  },
  {
   "n": 10,
   "m": 1,
   "topic": "Git Fundamentals",
   "video": "freeCodeCamp – Git & GitHub Full Course (1 hr)",
   "url": "https://www.youtube.com/watch?v=RGOj5yH7evk",
   "steps": [
    {
     "t": "Watch the full video",
     "sub": []
    },
    {
     "t": "Create a new GitHub repo called 'data-engineering-journey'",
     "sub": []
    },
    {
     "t": "Practice: git init, git add, git commit, git push",
     "sub": []
    },
    {
     "t": "Practice: create a branch 'feature/day10', make changes, push, create pull request",
     "sub": []
    },
    {
     "t": "Practice: merge the PR into main",
     "sub": []
    },
    {
     "t": "Write a professional README.md with: project goal, tech stack, how to run",
     "sub": []
    },
    {
     "t": "Deliverable: live GitHub repo with README and proper .gitignore",
     "sub": []
    }
   ]
  },
  {
   "n": 11,
   "m": 1,
   "topic": "SQL Basics",
   "video": "freeCodeCamp – SQL Full Course for Beginners (4 hrs)",
   "url": "https://www.youtube.com/watch?v=HXV3zeQKqGY",
   "steps": [
    {
     "t": "Watch: 0:00 – 1:30 (SELECT, WHERE, ORDER BY, LIMIT, DISTINCT)",
     "sub": []
    },
    {
     "t": "Install DBeaver Community (free) + connect to a SQLite or PostgreSQL DB",
     "sub": []
    },
    {
     "t": "Download the Northwind sample database (free online)",
     "sub": []
    },
    {
     "t": "Write query: get all customers from Germany",
     "sub": []
    },
    {
     "t": "Write query: get top 10 most expensive products",
     "sub": []
    },
    {
     "t": "Write query: count orders per customer, order by count DESC",
     "sub": []
    },
    {
     "t": "Write query: get employees whose last name starts with 'D'",
     "sub": []
    },
    {
     "t": "Deliverable: save all queries in a .sql file in GitHub day11/",
     "sub": []
    }
   ]
  },
  {
   "n": 12,
   "m": 1,
   "topic": "SQL Joins",
   "video": "freeCodeCamp – SQL Full Course (continue: 1:30–2:30)",
   "url": "https://www.youtube.com/watch?v=HXV3zeQKqGY",
   "steps": [
    {
     "t": "Watch: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN sections",
     "sub": []
    },
    {
     "t": "Practice INNER JOIN: combine orders + customers to see customer name per order",
     "sub": []
    },
    {
     "t": "Practice LEFT JOIN: all products including those with no orders",
     "sub": []
    },
    {
     "t": "Practice: join employees + orders + customers in a 3-table query",
     "sub": []
    },
    {
     "t": "Practice: find customers who have NEVER placed an order (LEFT JOIN + WHERE IS NULL trick)",
     "sub": []
    },
    {
     "t": "Explain in a comment: when to use INNER vs LEFT JOIN and why",
     "sub": []
    },
    {
     "t": "Deliverable: push joins.sql to GitHub day12/",
     "sub": []
    }
   ]
  },
  {
   "n": 13,
   "m": 1,
   "topic": "SQL Aggregation",
   "video": "freeCodeCamp – SQL Full Course (continue: 2:30–3:00)",
   "url": "https://www.youtube.com/watch?v=HXV3zeQKqGY",
   "steps": [
    {
     "t": "Watch: GROUP BY, HAVING, COUNT, SUM, AVG, MIN, MAX sections",
     "sub": []
    },
    {
     "t": "Practice: total revenue per product category",
     "sub": []
    },
    {
     "t": "Practice: average order value per customer, only show customers with avg > $100",
     "sub": []
    },
    {
     "t": "Practice: count orders per month using GROUP BY",
     "sub": []
    },
    {
     "t": "Practice: top 5 customers by total spending",
     "sub": []
    },
    {
     "t": "Practice: find categories where total sales > $10,000 (use HAVING)",
     "sub": []
    },
    {
     "t": "Deliverable: push aggregation.sql to GitHub day13/",
     "sub": []
    }
   ]
  },
  {
   "n": 14,
   "m": 1,
   "topic": "SQL Window Functions",
   "video": "Alex The Analyst – SQL Window Functions Tutorial (30 min)",
   "url": "https://www.youtube.com/watch?v=H6OTMoXjNiM",
   "steps": [
    {
     "t": "Watch full video",
     "sub": []
    },
    {
     "t": "Practice: ROW_NUMBER() to rank employees by salary within each department",
     "sub": []
    },
    {
     "t": "Practice: RANK() vs DENSE_RANK() — understand the difference with duplicates",
     "sub": []
    },
    {
     "t": "Practice: LAG() to compute month-over-month revenue change",
     "sub": []
    },
    {
     "t": "Practice: LEAD() to look ahead at next month revenue",
     "sub": []
    },
    {
     "t": "Practice: running total of sales using SUM() OVER(ORDER BY date)",
     "sub": []
    },
    {
     "t": "Deliverable: push window_functions.sql to GitHub day14/",
     "sub": []
    }
   ]
  },
  {
   "n": 15,
   "m": 1,
   "topic": "CTEs & Subqueries",
   "video": "Alex The Analyst – SQL CTEs Tutorial (20 min)",
   "url": "https://www.youtube.com/watch?v=K1WeoKxLZ5o",
   "steps": [
    {
     "t": "Watch full video",
     "sub": []
    },
    {
     "t": "Take one of your complex Day 13 queries and rewrite using a CTE",
     "sub": []
    },
    {
     "t": "Practice: multi-step CTE — Step 1 filters, Step 2 aggregates, Step 3 joins",
     "sub": []
    },
    {
     "t": "Practice: recursive CTE — generate numbers 1-10",
     "sub": []
    },
    {
     "t": "Practice: rewrite a correlated subquery using CTE for readability",
     "sub": []
    },
    {
     "t": "Document in README: when to use CTE vs subquery vs temp table",
     "sub": []
    },
    {
     "t": "Deliverable: push ctes.sql to GitHub day15/",
     "sub": []
    }
   ]
  },
  {
   "n": 16,
   "m": 1,
   "topic": "PostgreSQL Setup & Loading Data",
   "video": "freeCodeCamp – PostgreSQL Full Tutorial (4.5 hrs)",
   "url": "https://www.youtube.com/watch?v=qw--VYLpxG4",
   "steps": [
    {
     "t": "Watch first 45 minutes: install, connect, create DB, create tables",
     "sub": []
    },
    {
     "t": "Install PostgreSQL 16 from postgresql.org",
     "sub": []
    },
    {
     "t": "Connect via DBeaver: host=localhost, port=5432",
     "sub": []
    },
    {
     "t": "Create database: 'weather_dw'",
     "sub": []
    },
    {
     "t": "Create table: weather_raw with all columns from your Day 5/6 data",
     "sub": []
    },
    {
     "t": "Write Python script to load your cleaned CSV into PostgreSQL using psycopg2",
     "sub": []
    },
    {
     "t": "Run SELECT * to verify data loaded correctly",
     "sub": []
    },
    {
     "t": "Deliverable: push load_to_postgres.py to GitHub day16/",
     "sub": []
    }
   ]
  },
  {
   "n": 17,
   "m": 1,
   "topic": "15 Analytical SQL Queries",
   "video": "freeCodeCamp – PostgreSQL Tutorial (continue: 45 min–2 hrs)",
   "url": "https://www.youtube.com/watch?v=qw--VYLpxG4",
   "steps": [
    {
     "t": "Write and run all 15 queries on your weather dataset in DBeaver:",
     "sub": []
    },
    {
     "t": "Q1: total records, Q2: records per city, Q3: avg temp per city",
     "sub": []
    },
    {
     "t": "Q4: hottest day ever, Q5: coldest day ever, Q6: most humid city",
     "sub": []
    },
    {
     "t": "Q7: cities above 30°C more than 5 times, Q8: temperature trend over time",
     "sub": []
    },
    {
     "t": "Q9: rank cities by avg temp, Q10: running avg temperature",
     "sub": []
    },
    {
     "t": "Q11: day-over-day temp change using LAG(), Q12: temp vs humidity correlation",
     "sub": []
    },
    {
     "t": "Q13: top 3 hottest cities per month, Q14: cities with most data gaps",
     "sub": []
    },
    {
     "t": "Q15: custom business question you define yourself",
     "sub": []
    },
    {
     "t": "Deliverable: push 15_queries.sql with comments to GitHub day17/",
     "sub": []
    }
   ]
  },
  {
   "n": 18,
   "m": 1,
   "topic": "Query Optimization & Indexes",
   "video": "Hussein Nasser – Database Indexing Deep Dive (30 min)",
   "url": "https://www.youtube.com/watch?v=clrtT_4WBAw",
   "steps": [
    {
     "t": "Watch full video",
     "sub": []
    },
    {
     "t": "Run EXPLAIN ANALYZE on your slowest query — note the execution plan",
     "sub": []
    },
    {
     "t": "Add index: CREATE INDEX idx_city ON weather_raw(city);",
     "sub": []
    },
    {
     "t": "Add index: CREATE INDEX idx_date ON weather_raw(recorded_at);",
     "sub": []
    },
    {
     "t": "Run EXPLAIN ANALYZE again — compare before/after timing",
     "sub": []
    },
    {
     "t": "Try a composite index on (city, recorded_at) — when does it help?",
     "sub": []
    },
    {
     "t": "Document findings: which queries improved and by how much",
     "sub": []
    },
    {
     "t": "Deliverable: push optimization.md + indexed_queries.sql to GitHub day18/",
     "sub": []
    }
   ]
  },
  {
   "n": 19,
   "m": 1,
   "topic": "OLTP vs OLAP",
   "video": "Kahan Data Solutions – OLTP vs OLAP Explained (15 min)",
   "url": "https://www.youtube.com/watch?v=iw-5kFzIdgY",
   "steps": [
    {
     "t": "Watch full video",
     "sub": []
    },
    {
     "t": "Write a 400-word explanation in your README covering:",
     "sub": [
      "What OLTP is (definition + 2 real examples)",
      "What OLAP is (definition + 2 real examples)",
      "Key differences: write patterns, read patterns, normalization",
      "Which one is PostgreSQL? Which is Redshift?"
     ]
    },
    {
     "t": "Draw a simple diagram (on paper or draw.io) showing the difference",
     "sub": []
    },
    {
     "t": "Deliverable: update README.md in GitHub day19/ with your explanation",
     "sub": []
    }
   ]
  },
  {
   "n": 20,
   "m": 1,
   "topic": "Star Schema Design",
   "video": "Kahan Data Solutions – Star Schema Tutorial (20 min)",
   "url": "https://www.youtube.com/watch?v=hQvCOBv_-LE",
   "steps": [
    {
     "t": "Watch full video",
     "sub": []
    },
    {
     "t": "Design your star schema on paper or draw.io for the weather dataset:",
     "sub": [
      "fact_weather: id, date_key, city_key, temp, humidity, pressure, wind_speed",
      "dim_date: date_key, date, day, month, year, quarter, is_weekend",
      "dim_city: city_key, city_name, country, region, latitude, longitude",
      "dim_condition: condition_key, description, category (hot/warm/cool)"
     ]
    },
    {
     "t": "Define primary keys and foreign keys for each table",
     "sub": []
    },
    {
     "t": "Deliverable: push schema_design.png + schema_description.md to GitHub day20/",
     "sub": []
    }
   ]
  },
  {
   "n": 21,
   "m": 1,
   "topic": "Implement Star Schema in PostgreSQL",
   "video": "Kahan Data Solutions – Star Schema (implement it now)",
   "url": "https://www.youtube.com/watch?v=hQvCOBv_-LE",
   "steps": [
    {
     "t": "Create all 4 tables in PostgreSQL using CREATE TABLE statements",
     "sub": []
    },
    {
     "t": "Populate dim_date using a Python script (generate dates for last 2 years)",
     "sub": []
    },
    {
     "t": "Populate dim_city from your unique cities list",
     "sub": []
    },
    {
     "t": "Populate dim_condition with condition categories",
     "sub": []
    },
    {
     "t": "Write ETL to load fact_weather joining all dimension keys",
     "sub": []
    },
    {
     "t": "Run analytical query: avg temp by month using star schema joins",
     "sub": []
    },
    {
     "t": "Deliverable: push create_star_schema.sql + load_facts.py to GitHub day21/",
     "sub": []
    }
   ]
  },
  {
   "n": 22,
   "m": 1,
   "topic": "Incremental Loading",
   "video": "SeattleDataGuy – Incremental vs Full Load Explained (15 min)",
   "url": "https://www.youtube.com/watch?v=5L7UoXBQcFQ",
   "steps": [
    {
     "t": "Watch full video",
     "sub": []
    },
    {
     "t": "Add a column: loaded_at TIMESTAMP DEFAULT NOW() to fact_weather",
     "sub": []
    },
    {
     "t": "Write Python ETL that tracks last_loaded_at in a config table",
     "sub": []
    },
    {
     "t": "On each run: only fetch records newer than last_loaded_at",
     "sub": []
    },
    {
     "t": "Test: run script twice — second run should load 0 new records",
     "sub": []
    },
    {
     "t": "Add records and run again — only new records should load",
     "sub": []
    },
    {
     "t": "Log: 'Loaded X new records, skipped Y duplicates'",
     "sub": []
    },
    {
     "t": "Deliverable: push incremental_etl.py to GitHub day22/",
     "sub": []
    }
   ]
  },
  {
   "n": 23,
   "m": 1,
   "topic": "Linux & Bash Basics",
   "video": "freeCodeCamp – Bash Scripting Full Course (4 hrs)",
   "url": "https://www.youtube.com/watch?v=oxuRxtrO2Ag",
   "steps": [
    {
     "t": "Watch first 1 hour: navigation, file operations, permissions",
     "sub": []
    },
    {
     "t": "Practice commands: ls -la, cd, mkdir, touch, cp, mv, rm, cat, head, tail",
     "sub": []
    },
    {
     "t": "Practice: grep 'error' logs/etl.log to search log files",
     "sub": []
    },
    {
     "t": "Practice: chmod +x script.sh to make scripts executable",
     "sub": []
    },
    {
     "t": "Write a bash script that: creates a folder, copies your ETL script there, runs it",
     "sub": []
    },
    {
     "t": "Practice: use pipes — cat file.csv | grep 'Arusha' | wc -l",
     "sub": []
    },
    {
     "t": "Deliverable: push bash_practice.sh to GitHub day23/",
     "sub": []
    }
   ]
  },
  {
   "n": 24,
   "m": 1,
   "topic": "Cron Jobs & Scheduling",
   "video": "TechHut – Linux Cron Jobs Tutorial (15 min)",
   "url": "https://www.youtube.com/watch?v=v952m13p-b4",
   "steps": [
    {
     "t": "Watch full video",
     "sub": []
    },
    {
     "t": "Open crontab: crontab -e",
     "sub": []
    },
    {
     "t": "Schedule your ETL to run every hour: 0 * * * * /usr/bin/python3 /path/to/etl.py",
     "sub": []
    },
    {
     "t": "Schedule a daily DB backup script: 0 2 * * * /home/user/backup.sh",
     "sub": []
    },
    {
     "t": "Check crontab is active: crontab -l",
     "sub": []
    },
    {
     "t": "Wait and verify your ETL runs automatically (check logs)",
     "sub": []
    },
    {
     "t": "Practice: use https://crontab.guru to understand cron syntax",
     "sub": []
    },
    {
     "t": "Deliverable: push cron_setup.md with your crontab entries to GitHub day24/",
     "sub": []
    }
   ]
  },
  {
   "n": 25,
   "m": 1,
   "topic": "🎉 PROJECT 1 — FINALIZE & PUBLISH",
   "video": "Tech With Tim – How to Make a Good GitHub README (20 min)",
   "url": "https://www.youtube.com/watch?v=USjZcfj8yxE",
   "steps": [
    {
     "t": "Watch the video, then apply it to your project",
     "sub": []
    },
    {
     "t": "Clean all code: remove print statements, add docstrings, fix variable names",
     "sub": []
    },
    {
     "t": "Create architecture diagram on draw.io: API → Python ETL → PostgreSQL → Star Schema",
     "sub": []
    },
    {
     "t": "Write final README.md: problem statement, architecture, how to run, screenshots",
     "sub": []
    },
    {
     "t": "Record a 2-minute Loom video walking through your project",
     "sub": []
    },
    {
     "t": "Push everything to GitHub with a clean commit history",
     "sub": []
    },
    {
     "t": "Write a LinkedIn post: 'Day 25 of my 75-day Data Engineering journey...'",
     "sub": []
    },
    {
     "t": "🎉 CELEBRATE — You built a real ETL pipeline from scratch!",
     "sub": []
    }
   ]
  },
  {
   "n": 26,
   "m": 2,
   "topic": "AWS Basics & IAM",
   "video": "freeCodeCamp – AWS Certified Cloud Practitioner (intro sections, 2 hrs)",
   "url": "https://www.youtube.com/watch?v=ZB5ONbD_SMY",
   "steps": [
    {
     "t": "Watch first 2 hours: AWS overview, regions, AZs, core services",
     "sub": []
    },
    {
     "t": "Create a free AWS account at aws.amazon.com (credit card needed, won't be charged)",
     "sub": []
    },
    {
     "t": "Go to IAM → create a new user 'de-student' with programmatic access",
     "sub": []
    },
    {
     "t": "Attach policy: AmazonS3FullAccess + AmazonRedshiftFullAccess",
     "sub": []
    },
    {
     "t": "Download and save Access Key ID + Secret (keep safe, never commit to GitHub)",
     "sub": []
    },
    {
     "t": "Install AWS CLI: pip install awscli, run aws configure",
     "sub": []
    },
    {
     "t": "Test: aws sts get-caller-identity (should return your account info)",
     "sub": []
    },
    {
     "t": "Deliverable: push aws_setup.md (no keys!) to GitHub day26/",
     "sub": []
    }
   ]
  },
  {
   "n": 27,
   "m": 2,
   "topic": "Amazon S3",
   "video": "Be A Better Dev – AWS S3 Tutorial for Beginners (30 min)",
   "url": "https://www.youtube.com/watch?v=tfU0JEZjcsg",
   "steps": [
    {
     "t": "Watch full video",
     "sub": []
    },
    {
     "t": "Create S3 bucket: 'de-journey-[yourname]-raw' (bucket names must be globally unique)",
     "sub": []
    },
    {
     "t": "Create folder structure: raw/, processed/, archive/",
     "sub": []
    },
    {
     "t": "Upload your weather CSV manually via AWS Console",
     "sub": []
    },
    {
     "t": "Install boto3: pip install boto3",
     "sub": []
    },
    {
     "t": "Write Python script to list all objects in your bucket using boto3",
     "sub": []
    },
    {
     "t": "Upload a file programmatically using boto3.client('s3').upload_file()",
     "sub": []
    },
    {
     "t": "Deliverable: push s3_operations.py to GitHub day27/",
     "sub": []
    }
   ]
  },
  {
   "n": 28,
   "m": 2,
   "topic": "Amazon Redshift",
   "video": "Johnny Chivers – AWS Redshift Tutorial for Beginners (45 min)",
   "url": "https://www.youtube.com/watch?v=lWwFJV_9PoE",
   "steps": [
    {
     "t": "Watch full video",
     "sub": []
    },
    {
     "t": "Go to AWS Console → Redshift → Create Serverless Workgroup (free tier friendly)",
     "sub": []
    },
    {
     "t": "Create namespace and workgroup: 'de-journey-warehouse'",
     "sub": []
    },
    {
     "t": "Connect via DBeaver: add Redshift JDBC driver, enter cluster endpoint",
     "sub": []
    },
    {
     "t": "Create schema: CREATE SCHEMA weather_dw;",
     "sub": []
    },
    {
     "t": "Create a test table and insert 5 rows, then SELECT * to verify",
     "sub": []
    },
    {
     "t": "Understand: why is Redshift columnar? How does DISTKEY/SORTKEY work?",
     "sub": []
    },
    {
     "t": "Deliverable: push redshift_setup.md to GitHub day28/",
     "sub": []
    }
   ]
  },
  {
   "n": 29,
   "m": 2,
   "topic": "Python ETL → S3",
   "video": "Be A Better Dev – S3 with Python (boto3 in depth)",
   "url": "https://www.youtube.com/watch?v=tfU0JEZjcsg",
   "steps": [
    {
     "t": "Refactor your Day 5 ETL to save raw JSON to S3 BEFORE processing",
     "sub": []
    },
    {
     "t": "S3 path pattern: raw/year=2024/month=01/day=15/weather_20240115.json",
     "sub": []
    },
    {
     "t": "Add logging: log S3 upload success/failure",
     "sub": []
    },
    {
     "t": "Add error handling: retry upload 3 times before failing",
     "sub": []
    },
    {
     "t": "Test: run ETL end-to-end, verify file appears in S3 Console",
     "sub": []
    },
    {
     "t": "Add environment variables for AWS credentials using python-dotenv",
     "sub": []
    },
    {
     "t": "Deliverable: push updated etl_with_s3.py to GitHub day29/",
     "sub": []
    }
   ]
  },
  {
   "n": 30,
   "m": 2,
   "topic": "Load S3 → Redshift",
   "video": "Johnny Chivers – Redshift COPY Command (continue)",
   "url": "https://www.youtube.com/watch?v=lWwFJV_9PoE",
   "steps": [
    {
     "t": "Create your star schema tables in Redshift (adapt Day 21 SQL)",
     "sub": []
    },
    {
     "t": "Use Redshift COPY command to load from S3: COPY table FROM 's3://...' IAM_ROLE '...'",
     "sub": []
    },
    {
     "t": "Create an IAM Role that allows Redshift to read from S3",
     "sub": []
    },
    {
     "t": "Attach the role to your Redshift cluster",
     "sub": []
    },
    {
     "t": "Alternatively: use psycopg2 + redshift-connector to insert via Python",
     "sub": []
    },
    {
     "t": "Run SELECT COUNT(*) to verify all rows loaded",
     "sub": []
    },
    {
     "t": "Deliverable: push load_to_redshift.py + copy_commands.sql to GitHub day30/",
     "sub": []
    }
   ]
  },
  {
   "n": 31,
   "m": 2,
   "topic": "S3 Data Partitioning",
   "video": "Darshil Parmar – Data Engineering on AWS (partitioning section)",
   "url": "https://www.youtube.com/watch?v=GrLAbKMWZCA",
   "steps": [
    {
     "t": "Watch relevant sections on S3 partitioning",
     "sub": []
    },
    {
     "t": "Refactor your S3 upload to use Hive-style partitioning:",
     "sub": []
    },
    {
     "t": "s3://bucket/raw/year=2024/month=05/day=02/data.json",
     "sub": []
    },
    {
     "t": "Update your Python ETL to dynamically build the S3 path from today's date",
     "sub": []
    },
    {
     "t": "Run ETL on 3 different 'dates' — verify 3 different folders created in S3",
     "sub": []
    },
    {
     "t": "Understand why Athena and Glue can auto-discover partitioned data",
     "sub": []
    },
    {
     "t": "Document: what is partition pruning and why does it save money?",
     "sub": []
    },
    {
     "t": "Deliverable: push partitioned_upload.py to GitHub day31/",
     "sub": []
    }
   ]
  },
  {
   "n": 32,
   "m": 2,
   "topic": "Full vs Incremental Load (Cloud)",
   "video": "SeattleDataGuy – Incremental Loading Patterns",
   "url": "https://www.youtube.com/watch?v=5L7UoXBQcFQ",
   "steps": [
    {
     "t": "Implement incremental load tracking in Redshift:",
     "sub": []
    },
    {
     "t": "Create table: etl_metadata (table_name, last_loaded_at, rows_loaded)",
     "sub": []
    },
    {
     "t": "Before each load: query etl_metadata to get last_loaded_at",
     "sub": []
    },
    {
     "t": "Fetch only new records from API (filtered by timestamp)",
     "sub": []
    },
    {
     "t": "After load: UPDATE etl_metadata with new timestamp and row count",
     "sub": []
    },
    {
     "t": "Test: run pipeline twice — second run should load 0 rows",
     "sub": []
    },
    {
     "t": "Deliverable: push cloud_incremental_etl.py to GitHub day32/",
     "sub": []
    }
   ]
  },
  {
   "n": 33,
   "m": 2,
   "topic": "AWS Cost Awareness",
   "video": "Be A Better Dev – AWS Cost Management Tutorial (20 min)",
   "url": "https://www.youtube.com/watch?v=0d6OE6TB6JY",
   "steps": [
    {
     "t": "Watch full video",
     "sub": []
    },
    {
     "t": "Go to AWS Billing → Cost Explorer → check current spend",
     "sub": []
    },
    {
     "t": "Set up Budget Alert: Billing → Budgets → Create Budget → alert at $5 and $10",
     "sub": []
    },
    {
     "t": "Check which services are costing money (S3, Redshift, data transfer)",
     "sub": []
    },
    {
     "t": "Delete any resources you no longer need",
     "sub": []
    },
    {
     "t": "Document a cost optimization checklist for your project",
     "sub": []
    },
    {
     "t": "Rule to follow: delete Redshift cluster when not using, use S3 intelligently",
     "sub": []
    },
    {
     "t": "Deliverable: push cost_management.md to GitHub day33/",
     "sub": []
    }
   ]
  },
  {
   "n": 34,
   "m": 2,
   "topic": "Docker Basics",
   "video": "freeCodeCamp – Docker Full Course for Beginners (2 hrs)",
   "url": "https://www.youtube.com/watch?v=fqMOX6JJhGo",
   "steps": [
    {
     "t": "Watch first 1 hour: what is Docker, images, containers, commands",
     "sub": []
    },
    {
     "t": "Install Docker Desktop from docker.com",
     "sub": []
    },
    {
     "t": "Run: docker run hello-world (verify Docker works)",
     "sub": []
    },
    {
     "t": "Run: docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=pass postgres",
     "sub": []
    },
    {
     "t": "Connect to this containerized Postgres via DBeaver",
     "sub": []
    },
    {
     "t": "Practice commands: docker ps, docker images, docker stop, docker rm, docker logs",
     "sub": []
    },
    {
     "t": "Run: docker run -it python:3.11 bash → run Python inside container",
     "sub": []
    },
    {
     "t": "Deliverable: push docker_notes.md to GitHub day34/",
     "sub": []
    }
   ]
  },
  {
   "n": 35,
   "m": 2,
   "topic": "Write a Dockerfile",
   "video": "freeCodeCamp – Docker Full Course (continue: 1:00–1:45)",
   "url": "https://www.youtube.com/watch?v=fqMOX6JJhGo",
   "steps": [
    {
     "t": "Watch Dockerfile section",
     "sub": []
    },
    {
     "t": "Write Dockerfile for your ETL script:",
     "sub": [
      "FROM python:3.11-slim",
      "WORKDIR /app",
      "COPY requirements.txt .",
      "RUN pip install -r requirements.txt",
      "COPY . .",
      "CMD ['python', 'etl.py']"
     ]
    },
    {
     "t": "Build: docker build -t weather-etl:v1 .",
     "sub": []
    },
    {
     "t": "Run: docker run --env-file .env weather-etl:v1",
     "sub": []
    },
    {
     "t": "Verify ETL runs successfully inside container",
     "sub": []
    },
    {
     "t": "Deliverable: push Dockerfile + .dockerignore to GitHub day35/",
     "sub": []
    }
   ]
  },
  {
   "n": 36,
   "m": 2,
   "topic": "Docker Run & Debug",
   "video": "freeCodeCamp – Docker Full Course (continue: debugging containers)",
   "url": "https://www.youtube.com/watch?v=fqMOX6JJhGo",
   "steps": [
    {
     "t": "Practice: docker exec -it [container_id] bash (shell into running container)",
     "sub": []
    },
    {
     "t": "Practice: docker logs [container_id] -f (stream logs in real time)",
     "sub": []
    },
    {
     "t": "Practice: docker inspect [container_id] (view full container config)",
     "sub": []
    },
    {
     "t": "Pass env variables: docker run -e AWS_KEY=xxx -e AWS_SECRET=xxx weather-etl:v1",
     "sub": []
    },
    {
     "t": "Mount a volume: docker run -v $(pwd)/logs:/app/logs weather-etl:v1",
     "sub": []
    },
    {
     "t": "Tag and push image to Docker Hub: docker push yourname/weather-etl:v1",
     "sub": []
    },
    {
     "t": "Deliverable: push docker-run-commands.sh to GitHub day36/",
     "sub": []
    }
   ]
  },
  {
   "n": 37,
   "m": 2,
   "topic": "Docker Compose",
   "video": "TechWorld with Nana – Docker Compose Tutorial (30 min)",
   "url": "https://www.youtube.com/watch?v=DM65_JyGxCo",
   "steps": [
    {
     "t": "Watch full video",
     "sub": []
    },
    {
     "t": "Create docker-compose.yml with 2 services:",
     "sub": [
      "Service 1: postgres (image: postgres:15)",
      "Service 2: etl (build: ., depends_on: postgres)"
     ]
    },
    {
     "t": "Add environment variables and volume for postgres data",
     "sub": []
    },
    {
     "t": "Run: docker-compose up -d",
     "sub": []
    },
    {
     "t": "Verify both containers running: docker-compose ps",
     "sub": []
    },
    {
     "t": "Test: ETL container connects to postgres container by service name",
     "sub": []
    },
    {
     "t": "Run: docker-compose down to stop all services",
     "sub": []
    },
    {
     "t": "Deliverable: push docker-compose.yml to GitHub day37/",
     "sub": []
    }
   ]
  },
  {
   "n": 38,
   "m": 2,
   "topic": "PySpark Introduction",
   "video": "freeCodeCamp – PySpark Tutorial for Beginners (2.5 hrs)",
   "url": "https://www.youtube.com/watch?v=GFC2gOL1p9k",
   "steps": [
    {
     "t": "Watch first 1 hour: what is Spark, SparkSession, RDDs vs DataFrames",
     "sub": []
    },
    {
     "t": "Install PySpark: pip install pyspark",
     "sub": []
    },
    {
     "t": "Create a SparkSession in Python",
     "sub": []
    },
    {
     "t": "Load your weather CSV into a Spark DataFrame",
     "sub": []
    },
    {
     "t": "Practice: df.show(), df.printSchema(), df.count(), df.columns",
     "sub": []
    },
    {
     "t": "Compare: same operations in Pandas vs PySpark side-by-side",
     "sub": []
    },
    {
     "t": "Understand: what is lazy evaluation? Why does Spark use it?",
     "sub": []
    },
    {
     "t": "Deliverable: push spark_intro.py to GitHub day38/",
     "sub": []
    }
   ]
  },
  {
   "n": 39,
   "m": 2,
   "topic": "Spark Transformations",
   "video": "freeCodeCamp – PySpark Tutorial (continue: 1:00–1:45)",
   "url": "https://www.youtube.com/watch?v=GFC2gOL1p9k",
   "steps": [
    {
     "t": "Watch transformation sections: select, filter, withColumn, groupBy",
     "sub": []
    },
    {
     "t": "Practice: select specific columns using col() and select()",
     "sub": []
    },
    {
     "t": "Practice: filter rows where temperature > 28",
     "sub": []
    },
    {
     "t": "Practice: withColumn to add 'temp_celsius' = (F - 32) * 5/9",
     "sub": []
    },
    {
     "t": "Practice: groupBy city → agg(avg, max, min of temperature)",
     "sub": []
    },
    {
     "t": "Practice: use .when().otherwise() for conditional logic",
     "sub": []
    },
    {
     "t": "Practice: drop duplicates, rename columns, cast data types",
     "sub": []
    },
    {
     "t": "Deliverable: push spark_transforms.py to GitHub day39/",
     "sub": []
    }
   ]
  },
  {
   "n": 40,
   "m": 2,
   "topic": "Spark Joins",
   "video": "freeCodeCamp – PySpark Tutorial (continue: joins section)",
   "url": "https://www.youtube.com/watch?v=GFC2gOL1p9k",
   "steps": [
    {
     "t": "Practice inner join: fact_weather JOIN dim_city ON city_key",
     "sub": []
    },
    {
     "t": "Practice left join: all cities including those with no weather data",
     "sub": []
    },
    {
     "t": "Use broadcast join for small dimension table: from pyspark.sql.functions import broadcast",
     "sub": []
    },
    {
     "t": "df_fact.join(broadcast(df_city), 'city_key')",
     "sub": []
    },
    {
     "t": "Practice: 3-table join (fact + dim_city + dim_date)",
     "sub": []
    },
    {
     "t": "Run explain() on your join to see the physical plan",
     "sub": []
    },
    {
     "t": "Document: when to use broadcast join and why it's faster",
     "sub": []
    },
    {
     "t": "Deliverable: push spark_joins.py to GitHub day40/",
     "sub": []
    }
   ]
  },
  {
   "n": 41,
   "m": 2,
   "topic": "Spark Partitions",
   "video": "freeCodeCamp – PySpark Tutorial (partitioning section)",
   "url": "https://www.youtube.com/watch?v=GFC2gOL1p9k",
   "steps": [
    {
     "t": "Check default partitions: df.rdd.getNumPartitions()",
     "sub": []
    },
    {
     "t": "Practice repartition(8): increases partitions (use before wide transformations)",
     "sub": []
    },
    {
     "t": "Practice coalesce(2): reduces partitions (use before writing output)",
     "sub": []
    },
    {
     "t": "Write partitioned output: df.write.partitionBy('year','month').parquet('output/')",
     "sub": []
    },
    {
     "t": "Read partitioned data back and verify partition pruning works",
     "sub": []
    },
    {
     "t": "Experiment: process same data with 2, 4, 8 partitions — measure time",
     "sub": []
    },
    {
     "t": "Document: repartition vs coalesce — when to use each",
     "sub": []
    },
    {
     "t": "Deliverable: push spark_partitions.py to GitHub day41/",
     "sub": []
    }
   ]
  },
  {
   "n": 42,
   "m": 2,
   "topic": "Pandas vs Spark Comparison",
   "video": "freeCodeCamp – PySpark (final sections)",
   "url": "https://www.youtube.com/watch?v=GFC2gOL1p9k",
   "steps": [
    {
     "t": "Take your Day 7 Pandas transformation script",
     "sub": []
    },
    {
     "t": "Rewrite the EXACT same logic in PySpark",
     "sub": []
    },
    {
     "t": "Time both scripts on the same dataset using Python's time module",
     "sub": []
    },
    {
     "t": "Try with: 10K rows, 100K rows, 1M rows (generate synthetic data with Faker)",
     "sub": []
    },
    {
     "t": "Create a comparison table: operation, pandas_time, spark_time, winner",
     "sub": []
    },
    {
     "t": "Document: when is Spark overkill? When is it necessary?",
     "sub": []
    },
    {
     "t": "Deliverable: push comparison_pandas_spark.py + results.md to GitHub day42/",
     "sub": []
    }
   ]
  },
  {
   "n": 43,
   "m": 2,
   "topic": "Large Dataset with Spark",
   "video": "freeCodeCamp – PySpark (apply to large data)",
   "url": "https://www.youtube.com/watch?v=GFC2gOL1p9k",
   "steps": [
    {
     "t": "Download NYC Taxi dataset (free, ~2GB) from: https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page",
     "sub": []
    },
    {
     "t": "Load into Spark: spark.read.parquet('yellow_tripdata_2023-01.parquet')",
     "sub": []
    },
    {
     "t": "Run: count trips, avg fare, total revenue by payment type",
     "sub": []
    },
    {
     "t": "Find: top 10 busiest pickup zones",
     "sub": []
    },
    {
     "t": "Find: average trip duration by hour of day",
     "sub": []
    },
    {
     "t": "Write cleaned output to Parquet partitioned by month",
     "sub": []
    },
    {
     "t": "Note execution time and number of partitions used",
     "sub": []
    },
    {
     "t": "Deliverable: push nyc_taxi_analysis.py to GitHub day43/",
     "sub": []
    }
   ]
  },
  {
   "n": 44,
   "m": 2,
   "topic": "Batch Spark Pipeline",
   "video": "Darshil Parmar – End-to-End Data Engineering Project (Spark sections)",
   "url": "https://www.youtube.com/watch?v=GrLAbKMWZCA",
   "steps": [
    {
     "t": "Build a complete batch Spark pipeline with these stages:",
     "sub": []
    },
    {
     "t": "Stage 1 — Ingest: read Parquet from S3 or local storage",
     "sub": []
    },
    {
     "t": "Stage 2 — Validate: check for nulls, duplicates, out-of-range values",
     "sub": []
    },
    {
     "t": "Stage 3 — Transform: clean, enrich, join with dimension tables",
     "sub": []
    },
    {
     "t": "Stage 4 — Aggregate: compute summary metrics",
     "sub": []
    },
    {
     "t": "Stage 5 — Write: save to Parquet output partitioned by date",
     "sub": []
    },
    {
     "t": "Add logging between each stage: '✅ Stage 1 complete: X records'",
     "sub": []
    },
    {
     "t": "Deliverable: push batch_spark_pipeline.py to GitHub day44/",
     "sub": []
    }
   ]
  },
  {
   "n": 45,
   "m": 2,
   "topic": "Apache Airflow Basics",
   "video": "freeCodeCamp – Apache Airflow Full Course (3 hrs)",
   "url": "https://www.youtube.com/watch?v=AHgEOK6fCs0",
   "steps": [
    {
     "t": "Watch first 1 hour: what is Airflow, DAGs, Tasks, Operators, Scheduler",
     "sub": []
    },
    {
     "t": "Install: pip install apache-airflow (follow official quickstart docs)",
     "sub": []
    },
    {
     "t": "Initialize: airflow db init, airflow users create",
     "sub": []
    },
    {
     "t": "Start: airflow webserver -p 8080 AND airflow scheduler",
     "sub": []
    },
    {
     "t": "Open http://localhost:8080 in browser — explore the UI",
     "sub": []
    },
    {
     "t": "Look at existing example DAGs — understand structure",
     "sub": []
    },
    {
     "t": "Key concepts to know: DAG, Task, Operator, XCom, Hooks, Connections",
     "sub": []
    },
    {
     "t": "Deliverable: push airflow_notes.md to GitHub day45/",
     "sub": []
    }
   ]
  },
  {
   "n": 46,
   "m": 2,
   "topic": "Create Your First Airflow DAG",
   "video": "freeCodeCamp – Apache Airflow Full Course (continue: DAG creation)",
   "url": "https://www.youtube.com/watch?v=AHgEOK6fCs0",
   "steps": [
    {
     "t": "Watch DAG creation section (approx 1:00–2:00 of video)",
     "sub": []
    },
    {
     "t": "Create weather_etl_dag.py in your dags/ folder",
     "sub": []
    },
    {
     "t": "Define tasks using PythonOperator:",
     "sub": [
      "Task 1: extract_data() — fetch from API",
      "Task 2: transform_data() — clean and normalize",
      "Task 3: load_to_postgres() — insert to DB"
     ]
    },
    {
     "t": "Set task dependencies: extract >> transform >> load",
     "sub": []
    },
    {
     "t": "Trigger DAG manually in the Airflow UI",
     "sub": []
    },
    {
     "t": "Check logs for each task — confirm all green ✅",
     "sub": []
    },
    {
     "t": "Deliverable: push weather_etl_dag.py to GitHub day46/",
     "sub": []
    }
   ]
  },
  {
   "n": 47,
   "m": 2,
   "topic": "Airflow Retries & Failure Handling",
   "video": "freeCodeCamp – Apache Airflow (retry and callback sections)",
   "url": "https://www.youtube.com/watch?v=AHgEOK6fCs0",
   "steps": [
    {
     "t": "Add to each task: retries=3, retry_delay=timedelta(minutes=2)",
     "sub": []
    },
    {
     "t": "Add start_date, schedule_interval='@hourly' to your DAG",
     "sub": []
    },
    {
     "t": "Add on_failure_callback function that logs the error",
     "sub": []
    },
    {
     "t": "Simulate a failure: raise Exception in your extract task",
     "sub": []
    },
    {
     "t": "Watch Airflow retry 3 times then mark as Failed",
     "sub": []
    },
    {
     "t": "Add email_on_failure=True (configure SMTP if you want emails)",
     "sub": []
    },
    {
     "t": "Practice: use ShortCircuitOperator to skip pipeline if no new data",
     "sub": []
    },
    {
     "t": "Deliverable: push updated DAG with retry logic to GitHub day47/",
     "sub": []
    }
   ]
  },
  {
   "n": 48,
   "m": 2,
   "topic": "Airflow Monitoring",
   "video": "freeCodeCamp – Apache Airflow (monitoring and logging)",
   "url": "https://www.youtube.com/watch?v=AHgEOK6fCs0",
   "steps": [
    {
     "t": "Explore Airflow UI: Grid view, Graph view, Gantt chart, Logs",
     "sub": []
    },
    {
     "t": "Add XCom: push row count from load task, pull it in a notify task",
     "sub": []
    },
    {
     "t": "Create a send_notification task that runs after load and logs success",
     "sub": []
    },
    {
     "t": "Set task SLAs: sla=timedelta(hours=1) — alert if task takes too long",
     "sub": []
    },
    {
     "t": "Practice: look at task duration in Gantt chart — identify slow tasks",
     "sub": []
    },
    {
     "t": "Check: airflow tasks test weather_etl extract_data 2024-01-01",
     "sub": []
    },
    {
     "t": "Deliverable: push monitoring_dag.py with XCom + SLA to GitHub day48/",
     "sub": []
    }
   ]
  },
  {
   "n": 49,
   "m": 2,
   "topic": "Spark + Airflow Integration",
   "video": "freeCodeCamp – Apache Airflow (SparkSubmitOperator section)",
   "url": "https://www.youtube.com/watch?v=AHgEOK6fCs0",
   "steps": [
    {
     "t": "Install: pip install apache-airflow-providers-apache-spark",
     "sub": []
    },
    {
     "t": "Create a new DAG: spark_batch_dag.py",
     "sub": []
    },
    {
     "t": "Use SparkSubmitOperator to submit your Day 44 batch Spark job",
     "sub": []
    },
    {
     "t": "Pipeline: trigger Spark job → wait → validate output → notify",
     "sub": []
    },
    {
     "t": "Add sensor: FileSensor to wait until input data arrives before triggering Spark",
     "sub": []
    },
    {
     "t": "Run full end-to-end: Airflow triggers Spark which reads S3 and writes Parquet",
     "sub": []
    },
    {
     "t": "Deliverable: push spark_batch_dag.py to GitHub day49/",
     "sub": []
    }
   ]
  },
  {
   "n": 50,
   "m": 2,
   "topic": "🎉 PROJECT 2 — CLOUD PIPELINE COMPLETE",
   "video": "Tech With Tim – Professional GitHub README (apply to cloud project)",
   "url": "https://www.youtube.com/watch?v=USjZcfj8yxE",
   "steps": [
    {
     "t": "Clean all code: remove debug prints, add proper docstrings",
     "sub": []
    },
    {
     "t": "Draw architecture diagram: API → S3 → Redshift + Spark → Airflow (draw.io)",
     "sub": []
    },
    {
     "t": "Write comprehensive README: architecture, AWS setup, how to run",
     "sub": []
    },
    {
     "t": "Add cost estimate: 'Running this pipeline costs ~$X/month on AWS free tier'",
     "sub": []
    },
    {
     "t": "Record 3-minute Loom demo of the Airflow UI running your pipeline",
     "sub": []
    },
    {
     "t": "Push everything to GitHub with clean commit history",
     "sub": []
    },
    {
     "t": "Write LinkedIn post: 'Day 50 — I just built a cloud data pipeline with AWS + Spark + Airflow'",
     "sub": []
    },
    {
     "t": "🚀 You now look MID-LEVEL to any recruiter who sees this!",
     "sub": []
    }
   ]
  },
  {
   "n": 51,
   "m": 3,
   "topic": "Apache Kafka Fundamentals",
   "video": "Confluent – Apache Kafka Fundamentals Series (7 videos, ~90 min)",
   "url": "https://www.youtube.com/watch?v=Ch5VhJzaoaI",
   "steps": [
    {
     "t": "Watch the 7-video Confluent Kafka Fundamentals series (all free on YouTube)",
     "sub": []
    },
    {
     "t": "Key concepts to master: events, topics, partitions, offsets, brokers",
     "sub": []
    },
    {
     "t": "Install Kafka locally using Docker: docker run -d confluentinc/cp-kafka",
     "sub": []
    },
    {
     "t": "Or use: docker-compose with Zookeeper + Kafka + Kafka UI",
     "sub": []
    },
    {
     "t": "Create your first topic: kafka-topics.sh --create --topic weather-events",
     "sub": []
    },
    {
     "t": "List topics: kafka-topics.sh --list",
     "sub": []
    },
    {
     "t": "Describe topic: kafka-topics.sh --describe --topic weather-events",
     "sub": []
    },
    {
     "t": "Deliverable: push kafka_setup.md + docker-compose-kafka.yml to GitHub day51/",
     "sub": []
    }
   ]
  },
  {
   "n": 52,
   "m": 3,
   "topic": "Build a Kafka Producer",
   "video": "Confluent – Kafka Fundamentals (producer section)",
   "url": "https://www.youtube.com/watch?v=Ch5VhJzaoaI",
   "steps": [
    {
     "t": "Install: pip install confluent-kafka",
     "sub": []
    },
    {
     "t": "Write producer.py that simulates e-commerce transactions:",
     "sub": [
      "Generate random: order_id, user_id, product, amount, timestamp",
      "Serialize to JSON and produce to topic 'orders'",
      "Send 1 message per second in a loop"
     ]
    },
    {
     "t": "Add error callback: on_delivery to log successes and failures",
     "sub": []
    },
    {
     "t": "Run producer and verify messages appear in Kafka UI (http://localhost:8080)",
     "sub": []
    },
    {
     "t": "Test: produce 1000 messages, check topic offset is now 1000",
     "sub": []
    },
    {
     "t": "Deliverable: push producer.py to GitHub day52/",
     "sub": []
    }
   ]
  },
  {
   "n": 53,
   "m": 3,
   "topic": "Build a Kafka Consumer",
   "video": "Confluent – Kafka Fundamentals (consumer section)",
   "url": "https://www.youtube.com/watch?v=Ch5VhJzaoaI",
   "steps": [
    {
     "t": "Write consumer.py that reads from the 'orders' topic:",
     "sub": [
      "Deserialize JSON messages",
      "Print each order to console",
      "Commit offset manually (enable.auto.commit=False)"
     ]
    },
    {
     "t": "Start consumer BEFORE producer — observe messages arriving",
     "sub": []
    },
    {
     "t": "Stop consumer, produce 100 more messages, restart consumer — confirm it catches up",
     "sub": []
    },
    {
     "t": "Add: consumer group ID 'order-processor-group'",
     "sub": []
    },
    {
     "t": "Run 2 consumers in same group — observe partition assignment split",
     "sub": []
    },
    {
     "t": "Deliverable: push consumer.py to GitHub day53/",
     "sub": []
    }
   ]
  },
  {
   "n": 54,
   "m": 3,
   "topic": "Kafka Partitions & Keys",
   "video": "Confluent – Kafka Fundamentals (partitioning section)",
   "url": "https://www.youtube.com/watch?v=Ch5VhJzaoaI",
   "steps": [
    {
     "t": "Delete and recreate topic with 4 partitions",
     "sub": []
    },
    {
     "t": "In producer: set message key = user_id",
     "sub": []
    },
    {
     "t": "Observe: all messages from same user_id go to same partition (ordering!)",
     "sub": []
    },
    {
     "t": "Try: produce with no key → observe round-robin distribution",
     "sub": []
    },
    {
     "t": "Check partition assignment in Kafka UI",
     "sub": []
    },
    {
     "t": "Practice: create a topic with 8 partitions, produce 800 messages, verify ~100 per partition",
     "sub": []
    },
    {
     "t": "Document: why keys matter for ordering guarantees",
     "sub": []
    },
    {
     "t": "Deliverable: push partitioned_producer.py to GitHub day54/",
     "sub": []
    }
   ]
  },
  {
   "n": 55,
   "m": 3,
   "topic": "Delivery Guarantees & Idempotent Consumer",
   "video": "Confluent – Kafka Fundamentals (delivery semantics section)",
   "url": "https://www.youtube.com/watch?v=Ch5VhJzaoaI",
   "steps": [
    {
     "t": "Study: at-most-once, at-least-once, exactly-once — understand the tradeoffs",
     "sub": []
    },
    {
     "t": "Implement idempotent consumer:",
     "sub": [
      "Create a processed_orders table in PostgreSQL with order_id UNIQUE",
      "Before inserting: check if order_id already exists",
      "Use INSERT ... ON CONFLICT DO NOTHING"
     ]
    },
    {
     "t": "Test: process same batch twice — only one row per order_id in DB",
     "sub": []
    },
    {
     "t": "Enable producer idempotence: enable.idempotence=True",
     "sub": []
    },
    {
     "t": "Document: what is a consumer group rebalance and when does it happen?",
     "sub": []
    },
    {
     "t": "Deliverable: push idempotent_consumer.py to GitHub day55/",
     "sub": []
    }
   ]
  },
  {
   "n": 56,
   "m": 3,
   "topic": "Spark Structured Streaming",
   "video": "freeCodeCamp – PySpark (structured streaming section) + official Spark docs",
   "url": "https://www.youtube.com/watch?v=GFC2gOL1p9k",
   "steps": [
    {
     "t": "Also watch: https://www.youtube.com/watch?v=oI9SIcs_Jbs (Spark Streaming crash course)",
     "sub": []
    },
    {
     "t": "Write spark_streaming.py that reads from Kafka topic 'orders':",
     "sub": [
      "spark.readStream.format('kafka').option('kafka.bootstrap.servers','localhost:9092')",
      ".option('subscribe','orders').load()"
     ]
    },
    {
     "t": "Parse JSON from Kafka value column",
     "sub": []
    },
    {
     "t": "Write output to console sink first: .writeStream.format('console').start()",
     "sub": []
    },
    {
     "t": "Run producer in background while Spark streaming runs",
     "sub": []
    },
    {
     "t": "Observe real-time processing in terminal output",
     "sub": []
    },
    {
     "t": "Deliverable: push spark_streaming.py to GitHub day56/",
     "sub": []
    }
   ]
  },
  {
   "n": 57,
   "m": 3,
   "topic": "Real-time Aggregation",
   "video": "Spark Streaming Tutorial – Real-time Aggregations (YouTube)",
   "url": "https://www.youtube.com/watch?v=oI9SIcs_Jbs",
   "steps": [
    {
     "t": "Using your streaming pipeline from Day 56:",
     "sub": []
    },
    {
     "t": "Compute in real-time using watermarks and windows:",
     "sub": [
      "Orders per minute: tumbling window of 1 minute",
      "Revenue per product category: sliding window of 5 minutes",
      "Top 5 products in last 10 minutes"
     ]
    },
    {
     "t": "Add watermark: withWatermark('timestamp', '2 minutes') for late data",
     "sub": []
    },
    {
     "t": "Output: write aggregated results to console + PostgreSQL",
     "sub": []
    },
    {
     "t": "Run producer fast (100 msg/sec) and watch metrics update in real-time",
     "sub": []
    },
    {
     "t": "Deliverable: push real_time_aggregation.py to GitHub day57/",
     "sub": []
    }
   ]
  },
  {
   "n": 58,
   "m": 3,
   "topic": "Load Streaming Output to Storage",
   "video": "Spark Structured Streaming – Sinks Tutorial",
   "url": "https://www.youtube.com/watch?v=oI9SIcs_Jbs",
   "steps": [
    {
     "t": "Replace console sink with PostgreSQL sink using foreachBatch:",
     "sub": [
      "def write_to_postgres(batch_df, batch_id):",
      "batch_df.write.jdbc(url, 'streaming_metrics', mode='append')",
      "stream.writeStream.foreachBatch(write_to_postgres).start()"
     ]
    },
    {
     "t": "Add checkpointing: .option('checkpointLocation', '/tmp/checkpoint')",
     "sub": []
    },
    {
     "t": "Test: stop stream, restart it — verify it resumes from checkpoint (no duplicates)",
     "sub": []
    },
    {
     "t": "Also write raw events to S3/Parquet: .writeStream.format('parquet').save('s3://...')",
     "sub": []
    },
    {
     "t": "Deliverable: push streaming_sink.py to GitHub day58/",
     "sub": []
    }
   ]
  },
  {
   "n": 59,
   "m": 3,
   "topic": "Streaming Monitoring & Reliability",
   "video": "Spark Structured Streaming – Monitoring & Error Handling",
   "url": "https://www.youtube.com/watch?v=oI9SIcs_Jbs",
   "steps": [
    {
     "t": "Add StreamingQueryListener to monitor your stream:",
     "sub": [
      "Log: inputRowsPerSecond, processedRowsPerSecond, batchDuration"
     ]
    },
    {
     "t": "Simulate: stop Kafka → observe stream waiting, not crashing",
     "sub": []
    },
    {
     "t": "Simulate: send malformed JSON → handle with try/except in foreachBatch",
     "sub": []
    },
    {
     "t": "Add dead-letter queue: send bad records to 'orders-dlq' Kafka topic",
     "sub": []
    },
    {
     "t": "Set up alert: if batchDuration > 60 seconds, log a WARNING",
     "sub": []
    },
    {
     "t": "Document: what is exactly-once processing in Spark Streaming?",
     "sub": []
    },
    {
     "t": "Deliverable: push monitored_stream.py to GitHub day59/",
     "sub": []
    }
   ]
  },
  {
   "n": 60,
   "m": 3,
   "topic": "🎉 PROJECT 3 — STREAMING PIPELINE COMPLETE",
   "video": "Darshil Parmar – Data Engineering Streaming Project (full walkthrough)",
   "url": "https://www.youtube.com/watch?v=GrLAbKMWZCA",
   "steps": [
    {
     "t": "Clean up all streaming code: add docstrings, remove debug prints",
     "sub": []
    },
    {
     "t": "Draw streaming architecture: Producer → Kafka → Spark Streaming → PostgreSQL + S3",
     "sub": []
    },
    {
     "t": "Write README: how to start Kafka, how to run producer + streaming consumer",
     "sub": []
    },
    {
     "t": "Record 3-minute Loom video showing real-time data flowing through the system",
     "sub": []
    },
    {
     "t": "Push to GitHub with clean history",
     "sub": []
    },
    {
     "t": "Write LinkedIn post: 'Built a real-time streaming pipeline with Kafka + Spark!'",
     "sub": []
    },
    {
     "t": "🎉 You now have 3 portfolio projects — most junior candidates have ZERO.",
     "sub": []
    }
   ]
  },
  {
   "n": 61,
   "m": 3,
   "topic": "DBT Introduction",
   "video": "freeCodeCamp – DBT Full Course for Beginners (3 hrs)",
   "url": "https://www.youtube.com/watch?v=toSAAgLUHuk",
   "steps": [
    {
     "t": "Watch first 1 hour: what is DBT, project structure, profiles.yml",
     "sub": []
    },
    {
     "t": "Install: pip install dbt-postgres",
     "sub": []
    },
    {
     "t": "Initialize project: dbt init weather_transforms",
     "sub": []
    },
    {
     "t": "Configure profiles.yml to connect to your PostgreSQL warehouse",
     "sub": []
    },
    {
     "t": "Test connection: dbt debug (all checks should pass ✅)",
     "sub": []
    },
    {
     "t": "Explore project structure: models/, tests/, macros/, dbt_project.yml",
     "sub": []
    },
    {
     "t": "Understand: what is a 'model' in DBT? (it's just a .sql file!)",
     "sub": []
    },
    {
     "t": "Deliverable: push initialized dbt project to GitHub day61/",
     "sub": []
    }
   ]
  },
  {
   "n": 62,
   "m": 3,
   "topic": "DBT Staging Models",
   "video": "freeCodeCamp – DBT Full Course (continue: staging models section)",
   "url": "https://www.youtube.com/watch?v=toSAAgLUHuk",
   "steps": [
    {
     "t": "Watch staging models section",
     "sub": []
    },
    {
     "t": "Create models/staging/stg_weather.sql:",
     "sub": [
      "SELECT id, city, CAST(temperature AS FLOAT) as temp_celsius,",
      "humidity, recorded_at::DATE as date FROM {{ source('raw','weather_raw') }}"
     ]
    },
    {
     "t": "Create sources.yml defining your raw PostgreSQL tables",
     "sub": []
    },
    {
     "t": "Run: dbt run --select stg_weather",
     "sub": []
    },
    {
     "t": "Verify: new view created in PostgreSQL schema 'dbt_dev'",
     "sub": []
    },
    {
     "t": "Add staging models for all your other raw tables",
     "sub": []
    },
    {
     "t": "Deliverable: push staging models to GitHub day62/",
     "sub": []
    }
   ]
  },
  {
   "n": 63,
   "m": 3,
   "topic": "DBT Marts Layer",
   "video": "freeCodeCamp – DBT Full Course (marts layer section)",
   "url": "https://www.youtube.com/watch?v=toSAAgLUHuk",
   "steps": [
    {
     "t": "Watch marts/core models section",
     "sub": []
    },
    {
     "t": "Create models/marts/mart_weather_summary.sql:",
     "sub": [
      "SELECT city, DATE_TRUNC('month',date) as month,",
      "AVG(temp_celsius) as avg_temp, MAX(temp_celsius) as max_temp",
      "FROM {{ ref('stg_weather') }} GROUP BY 1,2"
     ]
    },
    {
     "t": "Use {{ ref() }} to reference upstream models (DBT handles dependency order!)",
     "sub": []
    },
    {
     "t": "Create mart_city_rankings.sql that ranks cities by average temperature",
     "sub": []
    },
    {
     "t": "Run: dbt run (runs ALL models in correct order automatically)",
     "sub": []
    },
    {
     "t": "Deliverable: push marts/ folder to GitHub day63/",
     "sub": []
    }
   ]
  },
  {
   "n": 64,
   "m": 3,
   "topic": "DBT Tests",
   "video": "freeCodeCamp – DBT Full Course (testing section)",
   "url": "https://www.youtube.com/watch?v=toSAAgLUHuk",
   "steps": [
    {
     "t": "Watch DBT testing section",
     "sub": []
    },
    {
     "t": "Add schema.yml with built-in tests:",
     "sub": [
      "not_null: temperature, city, recorded_at",
      "unique: id column in stg_weather",
      "accepted_values: city in ['Arusha','Dar es Salaam','Nairobi']",
      "relationships: fact_weather.city_key = dim_city.city_key"
     ]
    },
    {
     "t": "Run: dbt test → fix any failures",
     "sub": []
    },
    {
     "t": "Write a custom data test: test that avg temp is never above 60°C",
     "sub": []
    },
    {
     "t": "Deliverable: push schema.yml + custom tests to GitHub day64/",
     "sub": []
    }
   ]
  },
  {
   "n": 65,
   "m": 3,
   "topic": "DBT Documentation",
   "video": "freeCodeCamp – DBT Full Course (documentation section)",
   "url": "https://www.youtube.com/watch?v=toSAAgLUHuk",
   "steps": [
    {
     "t": "Watch documentation section",
     "sub": []
    },
    {
     "t": "Add descriptions to all models and columns in schema.yml",
     "sub": []
    },
    {
     "t": "Add model-level description: 'This model summarizes weather data by city and month'",
     "sub": []
    },
    {
     "t": "Add column-level description for every column in every model",
     "sub": []
    },
    {
     "t": "Run: dbt docs generate",
     "sub": []
    },
    {
     "t": "Run: dbt docs serve → open http://localhost:8080",
     "sub": []
    },
    {
     "t": "Explore: lineage graph — see how all models connect!",
     "sub": []
    },
    {
     "t": "Screenshot your lineage graph — add to your portfolio README",
     "sub": []
    },
    {
     "t": "Deliverable: push updated schema.yml + screenshot to GitHub day65/",
     "sub": []
    }
   ]
  },
  {
   "n": 66,
   "m": 3,
   "topic": "Data Governance & GDPR Basics",
   "video": "IBM Technology – What is Data Governance? (15 min)",
   "url": "https://www.youtube.com/watch?v=j3DvpYTRlvo",
   "steps": [
    {
     "t": "Watch full video",
     "sub": []
    },
    {
     "t": "Also watch: https://www.youtube.com/watch?v=s4IlcFcmGXk (GDPR explained simply)",
     "sub": []
    },
    {
     "t": "Write a governance_policy.md covering:",
     "sub": [
      "PII fields in your dataset (what counts as personal data?)",
      "How to handle PII: encrypt, mask, or pseudonymize",
      "Data retention policy: how long to keep raw data?",
      "Access control: who can query which tables?",
      "Data lineage: where does each field come from?"
     ]
    },
    {
     "t": "Implement: add a 'masked_user_id' column using MD5 hash",
     "sub": []
    },
    {
     "t": "Deliverable: push governance_policy.md to GitHub day66/",
     "sub": []
    }
   ]
  },
  {
   "n": 67,
   "m": 3,
   "topic": "Data Quality Checks",
   "video": "Data with Zach – Great Expectations Tutorial (40 min)",
   "url": "https://www.youtube.com/watch?v=GiIqBmX3YKM",
   "steps": [
    {
     "t": "Watch full video",
     "sub": []
    },
    {
     "t": "Install: pip install great_expectations",
     "sub": []
    },
    {
     "t": "Initialize: great_expectations init",
     "sub": []
    },
    {
     "t": "Create expectation suite for your weather data:",
     "sub": [
      "expect_column_to_exist('temperature')",
      "expect_column_values_to_not_be_null('city')",
      "expect_column_values_to_be_between('temperature', -10, 60)",
      "expect_column_values_to_be_unique('id')"
     ]
    },
    {
     "t": "Run validation: ge.validate(df, expectation_suite)",
     "sub": []
    },
    {
     "t": "Add quality check as a task in your Airflow DAG",
     "sub": []
    },
    {
     "t": "Deliverable: push quality_checks.py + expectations/ to GitHub day67/",
     "sub": []
    }
   ]
  },
  {
   "n": 68,
   "m": 3,
   "topic": "Schema Evolution",
   "video": "Confluent – Schema Evolution and Compatibility (20 min)",
   "url": "https://www.youtube.com/watch?v=lz8ROzJkBlI",
   "steps": [
    {
     "t": "Watch full video",
     "sub": []
    },
    {
     "t": "Simulate adding a new column: ALTER TABLE weather_raw ADD COLUMN wind_direction VARCHAR;",
     "sub": []
    },
    {
     "t": "Update your ETL to populate the new column",
     "sub": []
    },
    {
     "t": "Simulate removing a column: what breaks? How do you handle it?",
     "sub": []
    },
    {
     "t": "Practice backward-compatible change: add column with DEFAULT value",
     "sub": []
    },
    {
     "t": "Practice forward-compatible change: make a column nullable",
     "sub": []
    },
    {
     "t": "Write migration script: V2__add_wind_direction.sql",
     "sub": []
    },
    {
     "t": "Document: schema versioning strategy for production pipelines",
     "sub": []
    },
    {
     "t": "Deliverable: push migration scripts + schema_evolution.md to GitHub day68/",
     "sub": []
    }
   ]
  },
  {
   "n": 69,
   "m": 3,
   "topic": "Reliability Engineering",
   "video": "Google SRE – Site Reliability Engineering Concepts (30 min)",
   "url": "https://www.youtube.com/watch?v=y8OnoxKotPQ",
   "steps": [
    {
     "t": "Watch relevant sections on reliability patterns",
     "sub": []
    },
    {
     "t": "Add circuit breaker pattern to your ETL API calls (use tenacity library)",
     "sub": []
    },
    {
     "t": "Add retry with exponential backoff: @retry(stop=stop_after_attempt(3), wait=wait_exponential())",
     "sub": []
    },
    {
     "t": "Add SLA monitoring: if pipeline takes >30 min, send alert",
     "sub": []
    },
    {
     "t": "Add data freshness check: alert if no new data in last 2 hours",
     "sub": []
    },
    {
     "t": "Create a runbook.md: what to do when each type of failure occurs",
     "sub": []
    },
    {
     "t": "Add health check endpoint to your pipeline (simple HTTP server)",
     "sub": []
    },
    {
     "t": "Deliverable: push reliable_pipeline.py + runbook.md to GitHub day69/",
     "sub": []
    }
   ]
  },
  {
   "n": 70,
   "m": 3,
   "topic": "SQL Interview Prep",
   "video": "freeCodeCamp – SQL Interview Questions (1 hr)",
   "url": "https://www.youtube.com/watch?v=p3qvj9hO_Bo",
   "steps": [
    {
     "t": "Watch full video",
     "sub": []
    },
    {
     "t": "Go to: https://stratascratch.com and filter by Data Engineering + Hard",
     "sub": []
    },
    {
     "t": "Solve 10 problems — focus on:",
     "sub": [
      "Window functions: running totals, rankings, lead/lag",
      "Self-joins: find employees who earn more than their manager",
      "CTEs: multi-step analytical queries",
      "Optimization: rewrite a slow subquery"
     ]
    },
    {
     "t": "Time yourself: aim for <15 minutes per medium problem",
     "sub": []
    },
    {
     "t": "Write each solution in sql/ folder with your explanation",
     "sub": []
    },
    {
     "t": "Deliverable: push sql_interview_prep.sql (10 solutions) to GitHub day70/",
     "sub": []
    }
   ]
  },
  {
   "n": 71,
   "m": 3,
   "topic": "Python Interview Prep",
   "video": "NeetCode – Python for Coding Interviews (45 min)",
   "url": "https://www.youtube.com/watch?v=0K_eZGS5NsU",
   "steps": [
    {
     "t": "Watch full video",
     "sub": []
    },
    {
     "t": "Go to: https://leetcode.com → filter by Easy/Medium",
     "sub": []
    },
    {
     "t": "Solve these specific problems:",
     "sub": [
      "Two Sum (arrays/hashmaps)",
      "Valid Anagram (strings)",
      "Merge Two Sorted Lists (linked lists basics)",
      "Maximum Depth of Binary Tree",
      "Implement a basic LRU Cache using OrderedDict"
     ]
    },
    {
     "t": "For data engineering: practice writing a Python class for a connection pool",
     "sub": []
    },
    {
     "t": "Practice: write a generator that yields batches of data (yield keyword)",
     "sub": []
    },
    {
     "t": "Deliverable: push python_interview.py (5 solutions) to GitHub day71/",
     "sub": []
    }
   ]
  },
  {
   "n": 72,
   "m": 3,
   "topic": "System Design — Batch Pipeline",
   "video": "System Design Interview – Data Pipeline Design (30 min)",
   "url": "https://www.youtube.com/watch?v=M4lR_Va97cQ",
   "steps": [
    {
     "t": "Watch full video",
     "sub": []
    },
    {
     "t": "Design on paper: 'Build a pipeline to process 100M records/day'",
     "sub": []
    },
    {
     "t": "Your design must include: ingestion layer, processing layer, storage, orchestration",
     "sub": []
    },
    {
     "t": "Justify choices: Why Spark over Pandas? Why S3 over local? Why Airflow?",
     "sub": []
    },
    {
     "t": "Address: how do you handle failures at each stage?",
     "sub": []
    },
    {
     "t": "Address: how do you scale if data grows 10x?",
     "sub": []
    },
    {
     "t": "Address: how do you ensure exactly-once processing?",
     "sub": []
    },
    {
     "t": "Write your design in system_design_batch.md with a diagram",
     "sub": []
    },
    {
     "t": "Deliverable: push system_design_batch.md to GitHub day72/",
     "sub": []
    }
   ]
  },
  {
   "n": 73,
   "m": 3,
   "topic": "System Design — Streaming Pipeline",
   "video": "System Design Interview – Real-time Data Systems (30 min)",
   "url": "https://www.youtube.com/watch?v=m8Icp_Cid5o",
   "steps": [
    {
     "t": "Watch full video",
     "sub": []
    },
    {
     "t": "Design on paper: 'Build a real-time fraud detection system'",
     "sub": []
    },
    {
     "t": "Components: event ingestion (Kafka), stream processing (Spark/Flink),",
     "sub": [
      "feature store, ML model scoring, alert system, monitoring"
     ]
    },
    {
     "t": "Address: what is the acceptable latency? (target: <500ms)",
     "sub": []
    },
    {
     "t": "Address: how do you handle a Kafka consumer falling behind?",
     "sub": []
    },
    {
     "t": "Address: how do you test a streaming system?",
     "sub": []
    },
    {
     "t": "Write your design in system_design_streaming.md with a diagram",
     "sub": []
    },
    {
     "t": "Deliverable: push system_design_streaming.md to GitHub day73/",
     "sub": []
    }
   ]
  },
  {
   "n": 74,
   "m": 3,
   "topic": "Resume Preparation",
   "video": "Jeff Su – The Best Resume Template for Data Engineering (20 min)",
   "url": "https://www.youtube.com/watch?v=Tt08KmFfIYQ",
   "steps": [
    {
     "t": "Watch full video",
     "sub": []
    },
    {
     "t": "Write 3 versions of your resume:",
     "sub": [
      "Junior DE Resume: emphasize projects, Python/SQL, ETL pipeline",
      "Mid-level DE Resume: emphasize cloud (AWS), Spark, Airflow, Docker",
      "Senior DE Resume: emphasize architecture, system design, streaming"
     ]
    },
    {
     "t": "For each project: use STAR format — Situation, Task, Action, Result",
     "sub": []
    },
    {
     "t": "Quantify everything: 'processed 5GB of data', 'reduced load time by 40%'",
     "sub": []
    },
    {
     "t": "Add skills section: Python, SQL, PySpark, Kafka, DBT, Airflow, Docker, AWS, PostgreSQL",
     "sub": []
    },
    {
     "t": "Deliverable: push all 3 resume versions as PDFs to GitHub day74/",
     "sub": []
    }
   ]
  },
  {
   "n": 75,
   "m": 3,
   "topic": "🏆 PORTFOLIO DAY — YOU MADE IT!",
   "video": "Patrick Collins – How to Build a Portfolio That Gets You Hired (30 min)",
   "url": "https://www.youtube.com/watch?v=fMqL5vckiU0",
   "steps": [
    {
     "t": "Watch full video",
     "sub": []
    },
    {
     "t": "Create a master portfolio README with links to all 4 projects",
     "sub": []
    },
    {
     "t": "For each project: add badges (Python, PostgreSQL, AWS, Spark, etc.)",
     "sub": []
    },
    {
     "t": "Record a 5-minute Loom video tour of your entire portfolio",
     "sub": []
    },
    {
     "t": "Update LinkedIn: add all skills, update headline to 'Aspiring Data Engineer | ETL | Spark | Kafka | DBT'",
     "sub": []
    },
    {
     "t": "Apply to 5 data engineering positions today — your portfolio is ready!",
     "sub": []
    },
    {
     "t": "Do a full mock interview with a friend: 30 min SQL + 30 min system design",
     "sub": []
    },
    {
     "t": "Write your 75-day LinkedIn reflection post — inspire others!",
     "sub": []
    },
    {
     "t": "🎓 YOU ARE A DATA ENGINEER. Now go get that job! 🚀",
     "sub": []
    }
   ]
  }
 ],
 "resources": [
  {
   "cat": "🐍 Python",
   "name": "Corey Schafer YouTube",
   "what": "Best Python OOP & intermediate tutorials",
   "url": "https://youtube.com/@coreyms",
   "label": "youtube.com/@coreyms"
  },
  {
   "cat": "🐍 Python",
   "name": "freeCodeCamp Python",
   "what": "Full beginner Python course (12 hrs free)",
   "url": "https://youtube.com/watch?v=rfscVS0vtbw",
   "label": "youtube.com/watch?v=rfscVS0vtbw"
  },
  {
   "cat": "🐍 Python",
   "name": "Real Python",
   "what": "Articles & video courses on Python",
   "url": "https://realpython.com",
   "label": "realpython.com"
  },
  {
   "cat": "🗄 SQL",
   "name": "Alex The Analyst YouTube",
   "what": "SQL tutorials + window functions",
   "url": "https://youtube.com/@AlexTheAnalyst",
   "label": "youtube.com/@AlexTheAnalyst"
  },
  {
   "cat": "🗄 SQL",
   "name": "StrataScratch",
   "what": "Real interview SQL problems by company",
   "url": "https://stratascratch.com",
   "label": "stratascratch.com"
  },
  {
   "cat": "🗄 SQL",
   "name": "Mode SQL Tutorial",
   "what": "Interactive SQL learning",
   "url": "https://mode.com/sql-tutorial",
   "label": "mode.com/sql-tutorial"
  },
  {
   "cat": "🗄 SQL",
   "name": "SQLZoo",
   "what": "Practice problems online",
   "url": "https://sqlzoo.net",
   "label": "sqlzoo.net"
  },
  {
   "cat": "🐘 PostgreSQL",
   "name": "freeCodeCamp PostgreSQL",
   "what": "Full PostgreSQL course (free)",
   "url": "https://youtube.com/watch?v=qw--VYLpxG4",
   "label": "youtube.com/watch?v=qw--VYLpxG4"
  },
  {
   "cat": "☁️ AWS",
   "name": "AWS Free Tier",
   "what": "Services you can use for free",
   "url": "https://aws.amazon.com/free",
   "label": "aws.amazon.com/free"
  },
  {
   "cat": "☁️ AWS",
   "name": "Be A Better Dev (YouTube)",
   "what": "Practical AWS tutorials for developers",
   "url": "https://youtube.com/@BeABetterDev",
   "label": "youtube.com/@BeABetterDev"
  },
  {
   "cat": "🐳 Docker",
   "name": "Docker Official Docs",
   "what": "Reference for all Docker commands",
   "url": "https://docs.docker.com",
   "label": "docs.docker.com"
  },
  {
   "cat": "🐳 Docker",
   "name": "TechWorld with Nana (YouTube)",
   "what": "Best Docker + DevOps tutorials",
   "url": "https://youtube.com/@TechWorldwithNana",
   "label": "youtube.com/@TechWorldwithNana"
  },
  {
   "cat": "⚡ Spark",
   "name": "freeCodeCamp PySpark",
   "what": "Full PySpark course for beginners",
   "url": "https://youtube.com/watch?v=GFC2gOL1p9k",
   "label": "youtube.com/watch?v=GFC2gOL1p9k"
  },
  {
   "cat": "⚡ Spark",
   "name": "PySpark Official Docs",
   "what": "Full API reference",
   "url": "https://spark.apache.org/docs/latest/api/python",
   "label": "spark.apache.org/docs/latest/api/python"
  },
  {
   "cat": "🌬 Airflow",
   "name": "freeCodeCamp Airflow",
   "what": "Full Apache Airflow course",
   "url": "https://youtube.com/watch?v=AHgEOK6fCs0",
   "label": "youtube.com/watch?v=AHgEOK6fCs0"
  },
  {
   "cat": "🌬 Airflow",
   "name": "Airflow Official Docs",
   "what": "DAGs, operators, connections reference",
   "url": "https://airflow.apache.org/docs",
   "label": "airflow.apache.org/docs"
  },
  {
   "cat": "📡 Kafka",
   "name": "Confluent YouTube (free)",
   "what": "Best Kafka fundamentals series",
   "url": "https://youtube.com/confluent",
   "label": "youtube.com/confluent"
  },
  {
   "cat": "📡 Kafka",
   "name": "Learning Journal (YouTube)",
   "what": "5-hour Kafka deep dive",
   "url": "https://youtube.com/@LearningJournal",
   "label": "youtube.com/@LearningJournal"
  },
  {
   "cat": "🔧 DBT",
   "name": "freeCodeCamp DBT",
   "what": "Full DBT course for beginners",
   "url": "https://youtube.com/watch?v=toSAAgLUHuk",
   "label": "youtube.com/watch?v=toSAAgLUHuk"
  },
  {
   "cat": "🔧 DBT",
   "name": "DBT Official Courses",
   "what": "Free DBT courses from the creators",
   "url": "https://courses.getdbt.com",
   "label": "courses.getdbt.com"
  },
  {
   "cat": "📊 Data Sets",
   "name": "NYC Taxi Data",
   "what": "Real large dataset for Spark practice",
   "url": "https://nyc.gov/site/tlc/about/tlc-trip-record-data.page",
   "label": "nyc.gov/site/tlc/about/tlc-trip-record-data.page"
  },
  {
   "cat": "📊 Data Sets",
   "name": "Kaggle Datasets",
   "what": "Thousands of free datasets",
   "url": "https://kaggle.com/datasets",
   "label": "kaggle.com/datasets"
  },
  {
   "cat": "📊 Data Sets",
   "name": "AWS Open Datasets",
   "what": "Public S3 datasets",
   "url": "https://registry.opendata.aws",
   "label": "registry.opendata.aws"
  },
  {
   "cat": "💼 Career",
   "name": "Darshil Parmar (YouTube)",
   "what": "End-to-end DE project walkthroughs",
   "url": "https://youtube.com/@darshilparmar",
   "label": "youtube.com/@darshilparmar"
  },
  {
   "cat": "💼 Career",
   "name": "SeattleDataGuy (YouTube)",
   "what": "DE concepts, patterns, career advice",
   "url": "https://youtube.com/@SeattleDataGuy",
   "label": "youtube.com/@SeattleDataGuy"
  },
  {
   "cat": "💼 Career",
   "name": "DataTalksClub",
   "what": "Free DE ZoomCamp (annual, free!)",
   "url": "https://datatalks.club",
   "label": "datatalks.club"
  },
  {
   "cat": "💼 Career",
   "name": "GitHub",
   "what": "Host all your portfolio projects here",
   "url": "https://github.com",
   "label": "github.com"
  },
  {
   "cat": "💼 Career",
   "name": "LinkedIn",
   "what": "Post your projects — recruiters will find you",
   "url": "https://linkedin.com",
   "label": "linkedin.com"
  }
 ],
 "quotes": [
  {
   "icon": "🔥",
   "q": "Every senior data engineer you admire was once staring at their first Python error at 2am. Keep going.",
   "by": "Anonymous"
  },
  {
   "icon": "💡",
   "q": "You are not behind. You are exactly where you should be. Trust the process.",
   "by": "Anonymous"
  },
  {
   "icon": "🚀",
   "q": "In 75 days you will have built what most people only talk about building.",
   "by": "Anonymous"
  },
  {
   "icon": "⚡",
   "q": "The best investment you can make is in yourself. No one can take your skills away.",
   "by": "Warren Buffett"
  },
  {
   "icon": "🎯",
   "q": "Data engineers who can build, break, debug, and rebuild are worth 10x those who only watch tutorials.",
   "by": "Industry Truth"
  },
  {
   "icon": "🌊",
   "q": "Kafka, Spark, DBT — these are just tools. YOU are the engineer.",
   "by": "Anonymous"
  },
  {
   "icon": "💪",
   "q": "Every commit you push is proof that you showed up today. Push something every single day.",
   "by": "Anonymous"
  },
  {
   "icon": "🔑",
   "q": "It's not about being the best. It's about being better than you were yesterday.",
   "by": "Anonymous"
  },
  {
   "icon": "🏗",
   "q": "The pipeline you're building today will be the portfolio project that gets you hired tomorrow.",
   "by": "Anonymous"
  },
  {
   "icon": "📊",
   "q": "Data Engineering is one of the highest-paying entry points into tech. You're learning the right thing.",
   "by": "Industry Data 2025"
  },
  {
   "icon": "🛠",
   "q": "Reading documentation IS working. Debugging IS learning. Struggling IS progress.",
   "by": "Anonymous"
  },
  {
   "icon": "🌟",
   "q": "You don't need permission, a degree, or a certification. You need GitHub and consistency.",
   "by": "Anonymous"
  },
  {
   "icon": "⏰",
   "q": "Hard days build character. Easy days build complacency. Welcome the hard days.",
   "by": "Anonymous"
  },
  {
   "icon": "🏆",
   "q": "75 days. 4 projects. 1 GitHub portfolio. That's more than most candidates have.",
   "by": "Your Future Self"
  },
  {
   "icon": "🎓",
   "q": "The moment you finish Day 75, you'll realize the journey made you more capable than the destination.",
   "by": "Anonymous"
  }
 ],
 "months": [
  {
   "n": 1,
   "name": "Foundations",
   "range": "Days 1–25",
   "stack": "Python · SQL · PostgreSQL · Star Schema · Git · Linux",
   "icon": "🏗"
  },
  {
   "n": 2,
   "name": "Cloud & Scale",
   "range": "Days 26–50",
   "stack": "AWS S3 · Redshift · IAM · Docker · PySpark · Airflow",
   "icon": "☁️"
  },
  {
   "n": 3,
   "name": "Pro Level",
   "range": "Days 51–75",
   "stack": "Kafka · Spark Streaming · DBT · Data Quality · System Design · Resume",
   "icon": "🌊"
  }
 ],
 "projects": [
  {
   "n": 1,
   "day": 25,
   "start": 1,
   "title": "Weather ETL Warehouse",
   "flow": [
    "API",
    "Python ETL",
    "PostgreSQL",
    "Star Schema",
    "Incremental Load"
   ]
  },
  {
   "n": 2,
   "day": 50,
   "start": 26,
   "title": "Cloud Data Pipeline",
   "flow": [
    "AWS S3",
    "Redshift",
    "Spark",
    "Docker",
    "Airflow"
   ]
  },
  {
   "n": 3,
   "day": 60,
   "start": 51,
   "title": "Kafka Streaming Pipeline",
   "flow": [
    "Producer",
    "Kafka",
    "Spark Streaming",
    "Real-time Metrics",
    "PostgreSQL"
   ]
  },
  {
   "n": 4,
   "day": 75,
   "start": 61,
   "title": "DBT Transformation Layer",
   "flow": [
    "Staging",
    "Marts",
    "Tests",
    "Docs",
    "Data Quality Checks"
   ]
  }
 ]
};
