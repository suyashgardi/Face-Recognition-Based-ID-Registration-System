--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: logins_db; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.logins_db (
    phone bigint NOT NULL,
    "Pass" character varying,
    f_name character varying(50),
    l_name character varying(50),
    email character varying(100) NOT NULL
);


ALTER TABLE public.logins_db OWNER TO postgres;

--
-- Name: slides; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.slides (
    slide_no integer NOT NULL,
    slide_url character varying
);


ALTER TABLE public.slides OWNER TO postgres;

--
-- Name: slides_slide_no_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.slides_slide_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.slides_slide_no_seq OWNER TO postgres;

--
-- Name: slides_slide_no_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.slides_slide_no_seq OWNED BY public.slides.slide_no;


--
-- Name: states; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.states (
    statecode integer,
    statename character varying,
    distcode integer,
    distname character varying
);


ALTER TABLE public.states OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id_number bigint NOT NULL,
    registration_id integer NOT NULL,
    f_name character varying(50),
    m_name character varying(50),
    l_name character varying(50),
    gender character varying(25),
    address text,
    phone bigint,
    email character varying(80),
    dob date,
    photo_path text,
    account_linked bigint,
    "T28BitArr" double precision[],
    dist character varying,
    state character varying
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_registration_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN registration_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_registration_id_seq
    START WITH 1
    INCREMENT BY 1
    MINVALUE 0
    NO MAXVALUE
    CACHE 1
);


--
-- Name: slides slide_no; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.slides ALTER COLUMN slide_no SET DEFAULT nextval('public.slides_slide_no_seq'::regclass);


--
-- Name: logins_db logins_db_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.logins_db
    ADD CONSTRAINT logins_db_pkey PRIMARY KEY (phone);


--
-- Name: slides slides_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.slides
    ADD CONSTRAINT slides_pkey PRIMARY KEY (slide_no);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id_number);


--
-- Name: users users_account_linked_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_account_linked_fkey FOREIGN KEY (account_linked) REFERENCES public.logins_db(phone);


--
-- PostgreSQL database dump complete
--